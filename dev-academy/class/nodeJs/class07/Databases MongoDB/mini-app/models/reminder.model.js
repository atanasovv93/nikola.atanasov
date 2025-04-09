import { getDB } from "../config/db";

const ReminderModule = {
    async getReminders(req, res) {
        const reminders = await getDB().collection("reminders").find({}).toArray();
        
       
        res.send(reminders);
    },
};


export default ReminderModule;