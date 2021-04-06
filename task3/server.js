const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response) {
    
    if(request.url === "/home" || request.url === "/") {
        fs.readFile("data.json", function(error, data) {
            if(error) { 
                      
                response.statusCode = 404;
                response.end("Resourse not found!");
            }   
            else {
                response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                response.end(data);
            }
            });
    }
    
   else if(request.url.includes("/person/")) {
        let name = request.url.replace("/person/", "");
        name = name.replace("_", " ");
        fs.readFile("employee.html", "utf8", function(error, data) {
            fs.readFile("data.json", function(error, dataj) {
               
                var employees = JSON.parse(dataj);
                var outputEmployees = employees.filter((employee) => {
                        return (
                                employee.title = name
                            );
                })[0];
                
                // for(let key in employees) {
                //     let title =  `${employees[key].title}`;
                //     data = data.replace("{title}", title);
                //     response.end(data); 
                // }
               
                var id, title, text, img, department, room, mobilePhone, internalPhone, email, hireDate, status, start, start2, dayDuration, dayDuration2;
                if (name == "Konstantin Mironov") {
                    id = `${employees[0].id}`;
                    img = `${employees[0].image}`;
                    title =  `${employees[0].title}`;
                    text = `${employees[0].text}`;
                    department = `${employees[0].department.specialty}`;
                    room = `${employees[0].room.number}`;
                    mobilePhone = `${employees[0].contacts.mobilePhone}`;
                    internalPhone = `${employees[0].contacts.internalPhone}`;
                    email = `${employees[0].contacts.email}`;
                    hireDate = `${employees[0].profileInfo.hireDate}`;
                    status = `${employees[0].profileInfo.status}`;
                    start = `${employees[0].employmentInfo.start[0]}`;
                    start2 = `${employees[0].employmentInfo.start[1]}`;
                    dayDuration = `${employees[0].employmentInfo.dayDuration[0]}`;
                    dayDuration2 = `${employees[0].employmentInfo.dayDuration[1]}`;
                }

                if (name == "Daria Petrova") {
                    id = `${employees[1].id}`;
                    img = `${employees[1].image}`;
                    title =  `${employees[1].title}`;
                    text = `${employees[1].text}`;
                    department = `${employees[1].department.specialty}`;
                    room = `${employees[1].room.number}`;
                    mobilePhone = `${employees[1].contacts.mobilePhone}`;
                    internalPhone = `${employees[1].contacts.internalPhone}`;
                    email = `${employees[1].contacts.email}`;
                    hireDate = `${employees[1].profileInfo.hireDate}`;
                    status = `${employees[1].profileInfo.status}`;
                    start = `${employees[1].employmentInfo.start[0]}`;
                    start2 = `${employees[1].employmentInfo.start[1]}`;
                    dayDuration = `${employees[1].employmentInfo.dayDuration[0]}`;
                    dayDuration2 = `${employees[1].employmentInfo.dayDuration[1]}`;
                }

                if (name == "Victoria Skvortsova") {
                    id = `${employees[2].id}`;
                    img = `${employees[2].image}`;
                    title =  `${employees[2].title}`;
                    text = `${employees[2].text}`;
                    department = `${employees[2].department.specialty}`;
                    room = `${employees[2].room.number}`;
                    mobilePhone = `${employees[2].contacts.mobilePhone}`;
                    internalPhone = `${employees[2].contacts.internalPhone}`;
                    email = `${employees[2].contacts.email}`;
                    hireDate = `${employees[2].profileInfo.hireDate}`;
                    status = `${employees[2].profileInfo.status}`;
                    start = `${employees[2].employmentInfo.start[0]}`;
                    start2 = `${employees[2].employmentInfo.start[1]}`;
                    dayDuration = `${employees[2].employmentInfo.dayDuration[0]}`;
                    dayDuration2 = `${employees[2].employmentInfo.dayDuration[1]}`;
                }

                if (name == "Nadezhda Korneva") {
                    id = `${employees[3].id}`;
                    img = `${employees[3].image}`;
                    title =  `${employees[3].title}`;
                    text = `${employees[3].text}`;
                    department = `${employees[3].department.specialty}`;
                    room = `${employees[3].room.number}`;
                    mobilePhone = `${employees[3].contacts.mobilePhone}`;
                    internalPhone = `${employees[3].contacts.internalPhone}`;
                    email = `${employees[3].contacts.email}`;
                    hireDate = `${employees[3].profileInfo.hireDate}`;
                    status = `${employees[3].profileInfo.status}`;
                    start = `${employees[3].employmentInfo.start[0]}`;
                    start2 = `${employees[3].employmentInfo.start[1]}`;
                    dayDuration = `${employees[3].employmentInfo.dayDuration[0]}`;
                    dayDuration2 = `${employees[3].employmentInfo.dayDuration[1]}`;
                }

                if (name == "Semyon Orlov") {
                    id = `${employees[4].id}`;
                    img = `${employees[4].image}`;
                    title =  `${employees[4].title}`;
                    text = `${employees[4].text}`;
                    department = `${employees[4].department.specialty}`;
                    room = `${employees[4].room.number}`;
                    mobilePhone = `${employees[4].contacts.mobilePhone}`;
                    internalPhone = `${employees[4].contacts.internalPhone}`;
                    email = `${employees[4].contacts.email}`;
                    hireDate = `${employees[4].profileInfo.hireDate}`;
                    status = `${employees[4].profileInfo.status}`;
                    start = `${employees[4].employmentInfo.start[0]}`;
                    start2 = `${employees[4].employmentInfo.start[1]}`;
                    dayDuration = `${employees[4].employmentInfo.dayDuration[0]}`;
                    dayDuration2 = `${employees[4].employmentInfo.dayDuration[1]}`;
                }

                if (name == "Artem Kravtsov") {
                    id = `${employees[5].id}`;
                    img = `${employees[5].image}`;
                    title =  `${employees[5].title}`;
                    text = `${employees[5].text}`;
                    department = `${employees[5].department.specialty}`;
                    room = `${employees[5].room.number}`;
                    mobilePhone = `${employees[5].contacts.mobilePhone}`;
                    internalPhone = `${employees[5].contacts.internalPhone}`;
                    email = `${employees[5].contacts.email}`;
                    hireDate = `${employees[5].profileInfo.hireDate}`;
                    status = `${employees[5].profileInfo.status}`;
                    start = `${employees[5].employmentInfo.start[0]}`;
                    start2 = `${employees[5].employmentInfo.start[1]}`;
                    dayDuration = `${employees[5].employmentInfo.dayDuration[0]}`;
                    dayDuration2 = `${employees[5].employmentInfo.dayDuration[1]}`;
                }

                data = data.replace("{id}", id).replace("{text}", text).replace("{title}", title).replace("{department}", department).replace("{room}", room).replace("{mobile}",
                       mobilePhone).replace("{internal}", internalPhone).replace("{email}", email).replace("{hire}", hireDate).replace("{status}",
                       status).replace("{start}", start).replace("{start2}", start2).replace("{dayDuration}", dayDuration).replace("{dayDuration2}", 
                       dayDuration2).replace("{image}", img);
                response.end(data);
        
            });
        });

        
        
    }
    // else if(request.url === "/settings") {
    //     fs.readFile("settings.html", "utf8", function(error, data) {
    //         fs.readFile("data.json", function(error, dataj) {
    //             var employees = JSON.parse(dataj);
    //             for(key in employees) {
    //                 var name = `${employees[key].title}`;
    //             }
    //             data = data.replace('{name}', name);
    //             response.end(data);
    //         });
            
    //     });
    // }

    
}).listen(1000);