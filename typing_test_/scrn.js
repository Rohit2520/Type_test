const setofparas = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa rem tempore deleniti! Hic ea accusamus eum expedita quam fugiat fuga laboriosam quis? Laboriosam repellendus numquam, expedita sunt exercitationem quia esse illum odio eveniet atque rerum! Dolore suscipit consequuntur similique corrupti! Quis adipisci repellendus at, iste harum itaque quos in Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint omnis dolor inventore similique officia ducimus. Enim quos expedita soluta labore inventore hic incidunt odit ab..",

    "The rock martin (Ptyonoprogne fuligula) is a small swallow that is resident in central and southern Africa. It breeds in the mountains, and at lower levels in rocky areas and towns. It has mainly brown plumage and white 'windows' on the spread tail. Its call is a soft twitter. The sexes are similar in appearance. The martin hunts along cliff faces for flying insects. It breeds under cliff overhangs or on man-made structures using mud pellets to build a bowl or half-bowl nest with a soft lining. The bird is a solitary breeder, but small groups may nest close together in suitable locations. A typical clutch has two to three eggs, which are white with brown and grey blotches. Both adults incubate the eggs for 16–19 days and feed the chicks. Fledging takes another 22–24 days. The small martin is caught in flight by several falcons, such as hobbies, but it faces no major threats. Because of its extensive range and large stable population, it is assessed as a least-concern species on the IUCN Red List. ",

    "Alegrísima lentejas que resonancia mujer se árboles escobazos. Convexa dios mi a que amor de piel. De tierra las ilesa llanura los embozo. Los mujer lenta latido los me me a la, signos de entonces el tan tierra sensitivo y que pisan. Desnudo duro que las borrachos queman árboles de, el escaleras oh mi vuelve y horizonte bajaba. La donde consume ciudades de, árboles fría la talco el alegrísima huevos despenada venas subía. De un quedo plata loca, húmedo signos.",

    "The Battle of Höchstädt was fought on 19 June 1800 on the north bank of the Danube near Höchstädt, and resulted in a French victory under General Jean Victor Marie Moreau against the Austrians under Baron Pál Kray. The Austrians were subsequently forced back into the fortress town of Ulm. Instead of attacking the heavily fortified, walled city, which would result in massive losses of personnel and time, Moreau dislodged Kray's supporting forces defending the Danube passage further east. As a line of retreat eastward disappeared, Kray quickly abandoned Ulm, and withdrew into Bavaria. This opened the Danube pathway toward Vienna.",

   " The Danube passage connecting Ulm, Donauwörth, Ingolstadt and Regensburg had strategic importance in the ongoing competition for European hegemony between France and the Holy Roman Empire; the army that commanded the Danube, especially its passage through Württemberg and Bavaria, could command access to the important cities of Munich and the seat of Habsburg authority: Vienna. The end result of the battle was the opposite of what had occurred on those same fields almost 100 years earlier, when the armies of the Grand Alliance had faced the armies of France during the War of the Spanish Succession. At the Second Battle of Höchstädt in 1704, called the Battle of Blenheim by the English, the overwhelming Allied victory ensured the safety of Vienna from the Franco-Bavarian army, thus preventing the collapse of the Grand Alliance. France's loss during that engagement opened the pathway into France for the allied English and Austrian forces."
]
const msg = document.getElementById('msg');
const remark = document.getElementById('remark')
const typed = document.getElementById('typed');
const btn = document.getElementById('btn');
let start_time, end_time;

const playgame=()=>{
    let ran_Num = Math.floor(Math.random()*setofparas.length);
    msg.innerText = setofparas[ran_Num];
    // console.log(ran_Num)
    btn.innerText = 'Done';
    let date = new Date();
    start_time = date.getTime();

}
const endgame=()=>{
    let date = new Date();
    end_time = date.getTime();
    let tot_time = (end_time-start_time)/1000;
    tot_time = (parseInt(tot_time));
    console.log("total time " +tot_time);

    let totl_str = typed.value;
    let tot_word = counter(totl_str);
    console.log("total words "+tot_word)
    

    speed = Math.round((tot_word/tot_time)*60);
    


    let res = 'Your Current speed is '+ speed +' words per minute';
    let errors = compare(msg.innerText,totl_str);

    msg.innerText = res;
    remark.innerText = 'Remarks : ' + errors;
    
}

const compare=(orig,typed)=>{
    let word1 = orig.split(" ");
    let word2 = typed.split(" ");
    let cnt = 0;
    let arr = []
    word1.forEach(function(item,index) {
        if(item == word2[index]){
            cnt++;
            
        }else{
            arr.push(item);
        }
        
        
    });
    console.log(arr);
    let w_words = (word1.length-cnt);
    // return("You typed  " + cnt + " correct words out of "+ word1.length + " words and the total no. of errors are "+ w_words + ".");
}

const counter=(str)=>{
    let response = str.split(" ").length;
    if(response == 1 && str.split(" ")[0] == ""){
        console.log(" response 0");
        return 0;

    }else{

        console.log(response);
        return response;
    }
    return response; 
}


btn.addEventListener('click',function(){
    if(btn.innerText=='Start'){
        typed.disabled = false;
        playgame();
    }else if(this.innerText == 'Done'){
        typed.disabled=true;
        btn.innerText='Start';
        endgame();
    }
})