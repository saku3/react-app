import boto3
import json
import uuid

dynamodb = boto3.resource("dynamodb", region_name='ap-northeast-1')
table = dynamodb.Table('Todo')


def lambda_handler(event, context):
    method = event['httpMethod']
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET"
    }

    if method == 'GET':
        response = table.scan()

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps(response['Items']),
        }

    elif method == 'POST':
        body = json.loads(event['body'])
        item = {
            "id": str(uuid.uuid4()),
            "completed": False,
            "title": body["title"]
        }
        response = table.put_item(Item=item)

        return {
            "statusCode": 201,
            "headers": headers,
            "body": json.dumps(item)
        }

    elif method == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Headers": "Content-Type",
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST,GET"
            }
        }
