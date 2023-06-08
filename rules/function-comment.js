module.exports = {
    create(context) {
        return{

            FunctionExpression(node){
                let comments = context.getSourceCode().getCommentsInside(node);
                if(comments.length == 0){
                    context.report({
                        node,
                        message:"Every Function must contain atleast one comment"
                    })
                }
            }
        }
    }
}
