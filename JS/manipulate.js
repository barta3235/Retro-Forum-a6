const discuss = async (link)=>{
    if(!link){
        const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
        const data= await res.json();
        holder= await data['posts'];
        showData(holder);
    }else if(link!== 'Comedy' && link!== 'Music' && link!== 'Coding'){
          alert('Search by the correct category name');
          location.reload();
    }else{
        const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${link}`);
        const data= await res.json();
        holder= await data['posts'];
        showData(holder);
    }
    
}


const showData=(datas)=>{
    const letsDiscussContainer= document.getElementById('lets-discuss-container');

    letsDiscussContainer.textContent='';

    
    datas.forEach((data)=>{
        const div= document.createElement('div');
    

        div.classList= 'flex flex-col lg:flex-row gap-[30px] border border-[#7D7DFC] rounded-2xl p-[15px] lg:p-[40px] bg-[#797DFC1A] mb-4 lg:mb-6';
        div.innerHTML= `
              
                    <div class="indicator">
                        <span class="indicator-item badge ${data.isActive? 'bg-green-600': 'bg-red-600' }"></span>
                        <div class="grid w-32 h-32 bg-white place-items-center rounded-tl-[16px] rounded-bl-[16px] rounded-br-[16px]"><img src="${data.image}" alt="loading"></div>
                    </div>
                    
                    <!-- right side -->
                    <div>
                       <div class="flex flex-col lg:flex-row  text-[14px] text-[#12132DCC] gap-5 mb-3">
                          <h1># <span>${data.category}</span></h1>
                          <h1>Author: <span>${data.author.name}</span></h1>
                       </div>
    
                       <h1 id='p-title' class="text-[20px] font-bold text-[#12132D] mb-4">${data.title}</h1>
    
                       <h1 class="text-[#12132D99] text-[16px] font-normal mb-4">${data.description}</h1>
    
                       <hr class="border-dashed border text-[#12132D40] mb-6">
    
                       <div class="flex justify-between items-center">
                        <div class="flex flex-col lg:flex-row gap-7">
                            <div class="text-[#12132D99] font-normal gap-3 flex">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                              </svg> 
                              <p>${data.comment_count}</p>  
                            </div>
      
                            <div class="text-[#12132D99] font-normal gap-3 flex">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              </svg>
                                 
                              <p id='p-count'>${data.view_count}</p>  
                            </div>
      
                            <div class="text-[#12132D99] font-normal gap-3 flex">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                                 
                              <p><span>${data.posted_time}</span> min</p>  
                            </div>
                         </div>
                                                        
                         <div>
                            <button onclick='addToRead(${data.id})' class="bg-[#10B981] text-white rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                              </svg>
                              </button>
                         </div>
    
    
                       </div>
                    </div>
        `
        letsDiscussContainer.appendChild(div);
    })
    // "${data.title}","${data.view_count}"
    toggleSpinner(false);
}

const showLatest=(datas)=>{

    const latestContainer= document.getElementById('latest-news-container');

    latestContainer.textContent='';

    datas.forEach((data)=>{
        const div= document.createElement('div');
        div.classList="card border border-[#0C0D2D1A] rounded-3xl p-6";

        div.innerHTML= `
        <img class="rounded-[20px] mb-6" src="${data.cover_image}" alt="loading" />
                      
        <div class="flex gap-2 text-[#12132D99] text-[16px] font-normal mb-[15px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <h1>
            <span>${data.author.posted_date ? data.author.posted_date: "No published date" }</span>
            </h1>
        </div>

        <h1 class="text-[18px] font-extrabold mb-3">${data.title}</h1>
        
        <p class="text-[#12132D99] font-normal mb-4">
          ${data.description}
        </p>

        <div class="flex flex-col lg:flex-row gap-5 items-center">
          <img class="w-11 h-11 rounded-full" src="${data.profile_image}" alt="loading">

          <div>
              <h1 class="font-extrabold text-black mb-[5px]">${data.author.name ? data.author.name: "Unknown"}</h1>
              <p>${data.author.designation ? data.author.designation: 'Unknown' }</p>
          </div>

        </div>
        `
        latestContainer.appendChild(div);

    });

    toggleSpinner2(false);
}


//spinners
const toggleSpinner=(isLoading)=>{
    const spinner= document.getElementById('spinner');
    if(isLoading){
        spinner.classList.remove('hidden');
    }else{
        spinner.classList.add('hidden');
    }
}

const toggleSpinner2=(isLoading)=>{
    const spinner= document.getElementById('spinner2');
    if(isLoading){
        spinner.classList.remove('hidden');
    }else{
        spinner.classList.add('hidden');
    }
}





const handleSearch=()=>{
    setTimeout(toggleSpinner(true),5000);
    const inputField=document.getElementById('search-field');
    temp=inputField.value;
    temp1=temp.charAt(0).toUpperCase();
    temp2=temp.slice(1);
    final_temp=temp1+temp2
    console.log(final_temp);
    discuss(final_temp);
}

//latest 
const latest= async ()=>{
    toggleSpinner2(true);
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data= await res.json();
    holder= data;
    showLatest(holder);
}



// mark as read section work
const addToRead= async (givenId)=>{
    setTimeout(toggleSpinner(true),5000);
    let title='';
    let view='';
    
    const container= document.getElementById('readList');

    const res= await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data= await res.json();
    holder=data['posts'];

    holder.forEach((data)=>{
        if(givenId === data.id){
            //  console.log(data.id);
             title= data.title;
             view=data.view_count;

        }
    })


        

    const div = document.createElement('div');
    div.classList='flex flex-col lg:flex-row gap-3 bg-white p-4 rounded-2xl mb-4';
    div.innerHTML=`

    <h1 class="text-[16px] font-extrabold text-[#12132D]">${title}</h1>
    <div class="flex gap-2">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
         <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
     </svg>
        
     <p>${view}</p>
    </div>
    
    `
    container.appendChild(div);
   

    const tick = document.getElementById('msrc');
    const textValue=tick.innerText
    const numValue= parseInt(textValue);
    const provideValue= numValue+1;
    tick.innerText=provideValue;


    toggleSpinner(false);
}



discuss();
latest();





