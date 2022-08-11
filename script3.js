document.querySelector('#DATA').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();


    let url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

    xhr.open('GET', url,true)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)

            let output = ''
            for(let i=0; i < response.length; i++) {
                output += `
                    <div style="width: 300px; margin:20px;margin:0.5em;color:red;">
                        <p style="color: red">ID:${response[i].id}</p>
                        <p style="color: black">NAME:${response[i].name}</p>
                        <p style="color: black">USERNAME:${response[i].username}</p>
                        <p style="color: black">EMAIL:${response[i].email}</p>
                        ADDRESS
                        <p style="color: black">STREET:${response[i].address.street}</p>
                         <p style="color: black">SUITE:${response[i].address.suite}</p>
                          <p style="color: black">CITY:${response[i].address.city}</p>
                        <p style="color: black">ZIPCODE:${response[i].address.zipcode}</p>
                               <p style="color: black">LATITUDE:${response[i].address.geo.lat}</p>
 <p style="color: black">LONGITUDE:${response[i].address.geo.lng}</p>
                        <p style="color: black">PHONE:${response[i].phone}</p>
                        <p style="color: black">WEBSITE:${response[i].website}</p>
                        <p style="color: black">COMPANY-NAME:${response[i].company.name}</p>
                        <p style="color: black">CATCHPHRASE:${response[i].company.catchPhrase}</p>
                       <p style="color: black">BS:${response[i].company.bs}</p>

                    </div>
                `
            }

            document.querySelector('#data').innerHTML = output
        }
    }

    xhr.send()
})