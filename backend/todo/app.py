import boto3
import json
# from boto3.dynamodb.conditions import Key, Attr

dynamodb = boto3.resource("dynamodb", region_name='ap-northeast-1')
table = dynamodb.Table('Todo')


def lambda_handler(event, context):
    response = table.scan()

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
        },
        "body": json.dumps(response['Items']),
    }
