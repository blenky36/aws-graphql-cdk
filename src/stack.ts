import { Construct, Stack, App } from '@aws-cdk/core'
import { nodeJSLambda } from './cdk/lambda'
import { lambdaIntegration, restApi } from './cdk/restApi'

const serverlessGraphQLStack = (construct: Construct) => {
    const stack = new Stack(construct, 'ServerlessGraphQLStack')

    const graphQLApiGateway = restApi(stack, 'ServerlessGraphQLApi')

    const graphQLServerLambda = nodeJSLambda(stack, 'ServerlessGraphQLServerLambda', './graphql-lambda/index.ts')

    const graphQLServerLambdaIntegration = lambdaIntegration(graphQLServerLambda)

    const graphQL = graphQLApiGateway.root.addResource('graphql')
    graphQL.addMethod('GET', graphQLServerLambdaIntegration)
    graphQL.addMethod('POST', graphQLServerLambdaIntegration)
}

const app = new App()
serverlessGraphQLStack(app)