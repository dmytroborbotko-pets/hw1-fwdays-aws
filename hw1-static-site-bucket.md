#!/bin/bash
# login to aws
aws login

# create bucket and move local html to it
aws s3 mb s3://hw1-html-cli
aws s3 mv $PATH_TO_LOCAL_HTML s3://hw1-html-cli

# make bucket static website
aws s3 website s3://hw1-html-cli --index-document index.html

# enable public access and set policy
aws s3api put-public-access-bloc /
  --bucket hw1-html-cli
  --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
aws s3api put-bucket-policy --bucket hw1-html-cli --policy file://$PATH_TO_POLICY_JSON