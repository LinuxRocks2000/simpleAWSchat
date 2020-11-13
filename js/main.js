/*AWS.config.update({
  region: "us-east-2",
  accessKeyId: 'AKIA5STH7VP657JIA2M6',
  secretAccessKey: '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',
  endpoint: "https://dynamodb.us-east-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName : "simpleawschat-table",
    KeyConditionExpression: "#tp = :thrd",
    ExpressionAttributeNames:{
        "#tp": "Type"
    },
    ExpressionAttributeValues: {
        ":thrd": "thread"
    }
};

function liclicked(){
    document.getElementById("threadview-outer").classList.remove("hidden");
}

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query thread data. Error:", JSON.stringify(err, null, 2));
    } else {
        data.Items.forEach(function(item) {
            var li=document.createElement("li");
            li.innerHTML=item.Title;
            var number=item.Number.toString();
            li.setAttribute("number",number);
            li.addEventListener("click",liclicked);
            document.getElementById("threadlist").appendChild(li);
        });
    }
});*/
