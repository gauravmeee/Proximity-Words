const minDistance = (word1,word2)=>{
    let n1 = word1.length;
    let n2 = word2.length;
    let dp = [];
    for (let i = 0; i < n1 + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < n2 + 1; j++) {
            dp[i][j] = 0;
        }
    }
    for (let i = 0; i <= n2; i++) {
        dp[n1][i] = n2 - i;
    }
    for (let i = 0; i <= n1; i++) {
        dp[i][n2] = n1 - i;
    }
    for (let i = n1 - 1; i >= 0; i--) {
        for (let j = n2 - 1; j >= 0; j--) {
            let ans = 0;
            if (word1[i] == word2[j]) {
                ans = dp[i + 1][j + 1];
            } else {
                let op1 = dp[i + 1][j + 1] + 1;
                let op2 = dp[i][j + 1] + 1;
                let op3 = dp[i + 1][j] + 1;
                ans = Math.min(op1, Math.min(op2, op3));
            }
            dp[i][j] = ans;
        }
    }
    return dp[0][0];
}
const answerPara = document.getElementById("answerPara");
let count = 0;
const myText = document.getElementById("myText");
const running = ()=>{
    let inputD = 'health addiction recovery self improvement personal growth community service volunteering charity donation activism social media communication networking fashion beauty style design architecture engineering construction infrastructure transportation logistics supply chain management retail marketing advertising hospitality tourism entertainment sports recreation gaming gambling luxury lifestyle fashion industry beauty industry food industry agriculture manufacturing healthcare education sector telecommunications utilities energy sector financial services sector real estate industry aviation industry defense industry cybersecurity industry artificial intelligence machine learning big data analytics data science cybersecurity law journalism media broadcasting journalism journalism ethics media literacy cultural diversity social justice classroom clock club counselor credits dean diploma discipline dormitory economics enrollment extracurricular field trip final foreign language geography grade point average piz Giraffe elephants banana happy computer ocean blue mountain skiing books music apple sky travel friends coffee football yoga sunshine beach camera phone painting art Renuka Rohan Rupali Sachin Sahil Samarth Sameer Sandhya Sanjay Sarika Saurabh User common words related to hospital other than previous ChatGPT Sure here common words museum history culture language pizza sushi ice cream chocolate wine beer hiking forest meditation relaxation stress relief mindfulness health fitness swimming running biking gardening pets animals family love romance adventure discovery exploration learning education science technology innovation creativity entrepreneurship business finance economics politics government democracy justice equality climate change sustainability environment conservation renewable energy space exploration astronomy astrology mythology spirituality religion philosophy psychology therapy counseling mental  able about above across act addition address after again against age agree air all almost alone along already also although always am among amount and anger animal another answer any anyone anything anywhere appear apple approach are area argue arm army around arrange arrive art article as ask at attack attempt attention audience author authority available avoid away baby back bad balance ball bank bar base basic basis be bear beat'
    let inputD1 = 'beauty become bed before begin behind belief believe belong below best bet between beyond big bill biology bird birth bit black blame blood blow blue board boat body cab cabin cable cafe cake calculate calendar call calm camera camp campaign campus can cancel cancer candidate candle candy capital captain capture car carbon card care career careful cargo carpet carry case cash casino cast cat catch category cause ceiling celebrate cell center central century ceremony certain chair challenge chamber chance change channel chapter character charge charity chart chase cheap check cheese chef chemical chest chicken chief child childhood chip chocolate choice choose chorus Harsha Hema Ishaan Ishika Jatin Jay Jhanvi Jitendra Jyoti Kajal Kalyani Kavita Khushi Kiran Komal Kritika Kunal Lakshmi Madhavi Madhu Madhuri Mahesh Manish Manisha Mansi church cigarette circle circumstance cite citizen city civil claim class classic classroom clean clear clerk click client climate climb clock close cloth cloud club clue coach about after again all also always am and any are as at be because been before being between both but by can could did do does done down during each even every few for from get give go going good got had has have he her here him his how I if in into is it its just know let like look made make many me might more most much must my never new no not now of only or other our out over own people say see she should so some something take than that the their them then there these they thing think this those time to too two up us use very want way we well what when which who will with would year you your about above across after again against almost along also among another any anyone anything anywhere because before behind below beside between beyond both but by cannot can could didt do don done down during each either enough even ever every except far few first for four from further get go going gone got had has have having he her here hers herself him himself his how however if into it its just know large last left like line little long look made make may me mean might more most much must my name need never new next no not now number of off often on one only or other our out over own part people place point possible present probably problem put quite rather really right room same say see seem seen self set several she should show side since six small '
    let inputD2 = 'so some someone something sometimes soon still such system take ten than that the their them themselves then there these they thing think though three through time too together toward try turn two under until up upon us use used usually very want war way we well went were what when where whether which while who whole whose why will with within without woman work world would write year yet you young your above across against among behind below beneath beside between beyond both during ever few himself herself itself mine neither none nothing ourselves own several some somebody someone something themselves these this those three thus too under up upon us very was were whatever when whenever where wherever whether while academic assignment book calculator campus class college computer course curriculum degree desk diploma education exam faculty grade graduation homework instructor knowledge lecture library major math notebook paper pencil professor quiz reading report research scholarship school science semester student study syllabus teacher textbook thesis tuition university writing academic performance art class attendance backpack blackboard bullying bus cafeteria chalk  graduation ceremony gym hall pass history honors ID card laboratory language arts lesson locker lunch map music office hours parking physical education principal project recess registration science lab social studies speech student council study hall summer break syllabus team sports analysis architecture assembly automation CAD calculation circuit coding construction control design development diagram draft efficiency electrical electronic energy engineering equipment fabrication fluid force generator heat hydraulic industrial innovation inspection installation instrumentation machine maintenance manufacturing material mechanical mechanism modeling motor network optimization power process production project prototype quality reliability research robotics safety simulation software solution specification structure system technology testing thermodynamics tolerance tool transmission transportation vacuum validation value engineering verification voltage waste management welding wind turbine wireless workflow workshop 3D printing aerospace algorithm analysis and design antenna architecture design artificial intelligence assembly line automotive biotechnology CAD CAM carbon fiber '
    let inputD3 = 'chemical civil engineering computer science control system digital electrical engineering electronics embedded system energy conservation environmental geotechnical information technology Internet of Things IoT Adam Adrian Alan Alex Alexandra Alice Alicia Allison Alyssa Amanda Amber Amy Andrew Angela Anna Anthony Ashley Audrey Austin Ava Benjamin Blake Brandon Brayden Brian Brittany Brooke Caleb Cameron Caroline Carter Catherine Chad Charles Charlotte Chelsea Chloe Chris Christian Christina Christopher Claire Cody Colin Connor Cooper Courtney Crystal Dakota Daniel Danielle David Deanna Devin Diana Dominic Dylan Edward Elizabeth Ella Emily Emma Eric Erin Ethan Evan Faith Gabriella Garrett Gavin George Grace Grant Gregory Hailey Hannah Harrison Hayden Heather Henry Hunter Isabella Isabel Jack Jackson Jacob Jacqueline James Jasmine Jason Jayden Jeffrey Jenna Jennifer Jessica Jillian John Jonathan Jordan Joseph Aarav Aditi Advait Aisha Akash Akshay Alisha Amaira Amrita Ananya Aniket Anisha Ankita Ankit Anushka Aravind Arjun Arnav Aryan Asha Ashish Ashok Avinash Ayush Bhavesh Bhavya Chaitanya Chandan Chandni Dhananjay Dheeraj Dhruv Divya Gaurav Gayatri Gitanjali Gopal Harish Mayank Megha Mohan Monika Mukesh Muskan Nandini Naveen Neha Nikhil Nisha Nitesh Pankaj Parth Pooja Prachi Pradeep Prashant Praveen Priya Rahul Raj Rajesh Rakesh Rani Ravi  related to hospital Admission Ambulance Anesthesia Antibiotics Antiseptic Appointments Bandage Bedridden Blood Blood pressure Blood test Cardiology Catheter Checkup Chemotherapy Clinic Consultation Crutches CT scan Dental Diagnosis Dialysis Discharge Doctor Emergency Endoscopy Epidemic EKG Examination Family planning Fever First aid Fracture Gauze General practitioner Geriatrics Gynecology Health care Heart attack ICU Immunization Infection Infusion Inpatient Intensive care Intravenous Laboratory Laparoscopy Ligation Mammography Maternity Medical equipment Medical history Medication MRI Neonatal Neurology Nurse Nutrition Obstetrics Oncology Operation Ophthalmology Optometry Orthopedics Outpatient Oxygen Pain management Pathology Patient Pediatrics Pharmacy Physical therapy Physician Plastic surgery Podiatry Prescription Psychiatry Pulmonology Radiology Recovery Rehabilitation Respirator Rheumatology Scrubs Surgery Suture Syringe Triage Ultrasound Urology Vaccination Vascular Ventilator Vital signs Wheelchair X ray Yellow fever Zoonosis Zygoma'
    inputD = inputD + inputD1 + inputD2 + inputD3;
    let fromUser = myText.value;
    myText.value = "";
    let content = inputD.split(" ");
    ans = "";
    console.log("After ductnion");
    for (let i = 0; i < content.length; i++) {
        if (count >= 10) {
            break;
        }
        let d = minDistance(fromUser, content[i]);
        if (d === 1 || d === 2) {
            count++;
            console.log(content[i]);
            const header = document.createElement("p");
            // creates a <h1> element
            header.textContent = content[i];
            // add the text
            answerPara.append(header)
        }
    }
}
