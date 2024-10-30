
export async function NewClient(businessName){

    // Discord webhook URL (replace with your actual webhook URL)
    const webhookUrl = "https://discord.com/api/webhooks/1271133566394437755/49JxRkghMEbZvTMzA3oV9fduwKVJS8DcBQViRatdx8C8o4DlvqRP17PidQTzhg3z-iXu";
  
    const payload = {
      embeds: [
        {
          color: 0x0099ff,  // Set the color of the embed
          author: {
            name: `*NEW MESSAGE*`,  // User's name as the author
          },
          title: `A New Submission Has Been Made for ${businessName}`,  // Title of the ticket or subject
          description: `please check the admin Console at your earliest convince at https://admin.dreamindex.org/admissions to view the meeting date`,  // The main message body
          timestamp: new Date(),  // Timestamp of the message
          footer: {
            text: "Today at",  // Optional: footer text
          },
        }
      ]
    };
  
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message to Discord');
      }
  
    } catch (error) {
      return json({ error: error.message }, { status: 500 });
    }
};