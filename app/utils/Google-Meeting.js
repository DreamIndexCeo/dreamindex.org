import { google } from 'googleapis';
import { readFileSync } from 'fs';


// Load the service account credentials from the JSON key file
const credentials = JSON.parse(readFileSync('./app/utils/keys/meeting-manager-439518-e690804c8e2c.json'));
const calendarID = 'primary'; // Id of the calendar you want to add the event too

// Create a JWT client to authenticate with the Google Calendar API
const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/calendar.events'],
  });


// Function to create the event and return the meeting link
async function createMeetEvent(){

    const calendar = google.calendar({ version: 'v3', auth });



    const event = {
        summary: `Test Consultation Meeting`,
        location: 'Online', 
        description: 'A consultation meeting for a business website.',
        start: {
            'dateTime': '2015-05-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles',
        },
        end: {
            'dateTime': '2015-05-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles',
        },

        conferenceData: {
            createRequest: {
                requestId: 'uniqueRequestIdForThisMeet',
                conferenceSolutionKey: { type: 'hangoutsMeet' }
            }
        },
    };

    try {
        const res = await calendar.events.insert ({
            calendarId: calendarID,
            resource: event,
            conferenceDataVersion: 1,
        });

        // Return the Meet link
        console.log('Event created: %s', res.data.htmlLink);
        console.log('Meet link: %s', res.data.hangoutLink);

        return res.data.hangoutLink; // Return the Google Meet link
    } catch (error) {
        console.error('Error creating event: ' + error);
        //throw error;
    }
}

createMeetEvent()
    .then((meetLink) => {
        console.log('google Meet Link: ', meetLink)
    })
    .catch(console.error);


async function listCalendars() {
    const calendar = google.calendar({ version: 'v3', auth });
        
    const result = await calendar.calendarList.list();
    console.log('API Response:', result.data); // Add this to inspect the full response
    console.log('Calendars:', result.data.items); // Check if the items array is empty or if there's an error
        
    if (result.data.items.length === 0) {
        console.log('No calendars found.');
    }
    }
      
      listCalendars();