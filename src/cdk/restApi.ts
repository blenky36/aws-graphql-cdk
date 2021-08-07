import { RestApi, LambdaIntegration } from '@aws-cdk/aws-apigateway'
import { IFunction } from '@aws-cdk/aws-lambda'
import { Construct } from '@aws-cdk/core'

export const restApi = (stack: Construct, id: string) => {
    return new RestApi(stack, id, {
        restApiName: id
    })
}

export const lambdaIntegration = (handler: IFunction) => new LambdaIntegration(handler)

