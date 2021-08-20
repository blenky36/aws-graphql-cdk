import { Runtime } from '@aws-cdk/aws-lambda'
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs'
import { Construct } from '@aws-cdk/core'
import path from 'path'

export const nodeJSLambda = (stack: Construct, id: string, codePath: string) => {
    return new NodejsFunction(stack, id, {
        entry: path.join(__dirname, codePath),
        runtime: Runtime.NODEJS_14_X,
        bundling: {
            externalModules: ['aws-sdk']
        }
    })
}
