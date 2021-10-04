const express = require('express');  
const bodyParser = require('body-parser');    
const app = express();  app.use(bodyParser.json());    
const port = 3000;    
app.get('/conversation/:text*?', (req, res) => {    const { text } = req.params;     
 res.json(text);  });   
 app.listen(port, () => console.log(`Running on port ${port}`));

 <script>
  window.watsonAssistantChatOptions = {
      integrationID: "d6be15c1-bab0-4550-8db1-647af10f69e4", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "c72e4179-9a0b-4da0-9b05-e32de6944403", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || 'latest') +
      "/WatsonAssistantChatEntry.js"
    document.head.appendChild(t);
  });
</script>