import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import { ViewerProtocolPolicy } from "aws-cdk-lib/aws-cloudfront";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

export class IntegrationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const siteBucket = new s3.Bucket(this, "ReactBucket", {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "error.html",
      publicReadAccess: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicPolicy: false,
      }),
    });

    new cloudfront.Distribution(this, "ReactDistribution", {
      defaultBehavior: {
        origin: new origins.S3StaticWebsiteOrigin(siteBucket, {
          originPath: "/",
        }),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: "index.html",
    });

    new BucketDeployment(this, "DeployWebsite", {
      sources: [Source.asset("../dist")],
      destinationBucket: siteBucket,
    });
  }
}
