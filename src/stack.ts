import { App, Construct, Stack } from "@aws-cdk/core";
import { nodeJSLambda } from "./lambda";
import { lambdaIntegration, restApi } from "./restApi";

const serverlessGraphQLStack = (construct: Construct) => {
    const stack = new Stack(construct, 'ServerlessGraphQLStack')

    const graphQLServerLambda = nodeJSLambda(stack, 'GraphQLServerLambda', '../graphql-lambda/index.ts')

    const graphQLServerRestApi = restApi(stack, 'GraphQLServerRestApi')

    const graphQLServerLambdaIntegration = lambdaIntegration(graphQLServerLambda)

    const graphQL = graphQLServerRestApi.root.addResource('graphql')
    graphQL.addMethod('GET', graphQLServerLambdaIntegration)
    graphQL.addMethod('POST', graphQLServerLambdaIntegration)

}

const app = new App()
serverlessGraphQLStack(app)
