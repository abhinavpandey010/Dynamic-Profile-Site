const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    const names=['Amit','Aman','Anikesh','Ajay','Arun','Arjun','Abhijit','Akhil','Anmol','Ankit'];
    let data=[];
    for (let i = 0; i<10; i++){
        data.push({name: names[i]})
    }
    console.log(data);
    res.render('home',{rows: data});    
});
app.get('/aboutus', (req,res)=>{
    res.send('Hi this is aboutus page');
})
const profiles = [
    {
        name: "Akhil",
        profession: "Web Developer",
        address: "123 MG Road, Bengaluru, Karnataka 560001",
        email: "akhil@example.com",
        phone: "+91-9876543210",
        mobile: "+91-9123456789",
        skills: {
          webDesign: true,  // Web Design is now a separate skill
          websiteMarkup: true,
          onePage: false,
          mobileTemplate: true,
          backendAPI: true
        }
      },
      {
        name: "Aman",
        profession: "UI/UX Designer",
        address: "456 Park Street, Kolkata, West Bengal 700016",
        email: "aman@example.com",
        phone: "+91-8765432109",
        mobile: "+91-9012345678",
        skills: {
          webDesign: true,  // Web Design is now a separate skill
          websiteMarkup: true,
          onePage: true,
          mobileTemplate: false,
          backendAPI: false
        }
      },
      {
        name: "Abhinav",
        profession: "Backend Developer",
        address: "789 Lodhi Road, New Delhi 110003",
        email: "abhinav@example.com",
        phone: "+91-7654321098",
        mobile: "+91-8901234567",
        skills: {
          webDesign: false,  // No Web Design skill
          websiteMarkup: false,
          onePage: false,
          mobileTemplate: true,
          backendAPI: true
        }
      },
      {
        name: "Anshuman",
        profession: "Full Stack Developer",
        address: "321 Banjara Hills, Hyderabad, Telangana 500034",
        email: "anshuman@example.com",
        phone: "+91-6543210987",
        mobile: "+91-7890123456",
        skills: {
          webDesign: true,  // Web Design is now a separate skill
          websiteMarkup: true,
          onePage: true,
          mobileTemplate: true,
          backendAPI: true
        }
      },
      {
        name: "Vibhavasu",
        profession: "Frontend Developer",
        address: "789 Koregaon Park, Pune, Maharashtra 411001",
        email: "vibhavasu@example.com",
        phone: "+91-5432109876",
        mobile: "+91-6789012345",
        skills: {
          webDesign: true,  // Web Design is now a separate skill
          websiteMarkup: true,
          onePage: false,
          mobileTemplate: true,
          backendAPI: false
        }
      },
      {
        name: "Sarthak",
        profession: "Graphic Designer",
        address: "123 Andheri West, Mumbai, Maharashtra 400058",
        email: "sarthak@example.com",
        phone: "+91-4321098765",
        mobile: "+91-5678901234",
        skills: {
          webDesign: false,  // No Web Design skill
          websiteMarkup: true,
          onePage: true,
          mobileTemplate: false,
          backendAPI: false
        }
      },
      {
        name: "Tarun",
        profession: "Database Administrator",
        address: "456 Anna Salai, Chennai, Tamil Nadu 600002",
        email: "tarun@example.com",
        phone: "+91-3210987654",
        mobile: "+91-4567890123",
        skills: {
          webDesign: false,  // No Web Design skill
          websiteMarkup: false,
          onePage: false,
          mobileTemplate: true,
          backendAPI: true
        }
      },
      {
        name: "Shivam",
        profession: "Software Engineer",
        address: "789 Marine Drive, Mumbai, Maharashtra 400002",
        email: "shivam@example.com",
        phone: "+91-2109876543",
        mobile: "+91-3456789012",
        skills: {
          webDesign: true,  // Web Design is now a separate skill
          websiteMarkup: true,
          onePage: true,
          mobileTemplate: true,
          backendAPI: true
        }
      }
  ];
  
  
app.get('/profile/:n',(req,res)=>{
 
    let n = Number(req.params.n);
    console.log(profiles[n]);
    res.render('profile.ejs',profiles[n]); 
})

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
});