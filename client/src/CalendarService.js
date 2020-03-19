import axios from 'axios';



const url = 'http://localhost:5000/api/events/';

class CalendarService {
    // Get Posts
    static getEvents(){                              // Make static so can call as filename.getPosts() e.g PostService.getPosts()
      try {
            
        axios.get(url)
        .then(response => {
          this.events = response.data;
          return this.events;
        })
        .catch(err => {
          this.errors.push(err)
        })
         //let events =[];
        /*  this.events = [
               {"name":"test","start":"2020-03-18","color":"blue"}
             , {"name":"test2","start":"2020-03-03","color":"orange"}
           ];*/

           console.log(this.events)
           
       } catch (err) {
           this.err = err.message;
       }
      } 
    }   

export default CalendarService; 