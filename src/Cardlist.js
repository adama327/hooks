import React,{useState,useRef} from "react";

export const list=[

   {
      id:2,
      title:"Suits", 
       posterURL:"https://galupdotnet.files.wordpress.com/2013/10/suits.jpeg",
       description:"À la recherche d'un collaborateur, Harvey Specter, un avocat d'affaires de Manhattan, engage la seule personne qui l'impressionne : Mike Ross, qui a abandonné ses études et est doté d'une mémoire eidétique.",
        rate:"13",
    },
 
    {
      id:3,
      title:"The Blacklist",
       posterURL:"https://images.critictoo.com/wp-content/uploads/2021/10/The-Blacklist-Saison-9-James-Spader.jpg", description:"L'ex-agent du gouvernement Raymond Red Reddington est l'un des fugitifs les plus recherchés au monde. Il accepte de collaborer avec le FBI à condition de travailler avec la profileuse Elizabeth Keen.",
       rate:"8",
    },
    {
      id:1,
      title:"Narcos",
       posterURL:"https://www.justfocus.fr/wp-content/uploads/2016/06/narcos.jpg", description:"Inspirée de l'histoire du célèbre narcotrafiquant de Medellín Pablo Escobar, cette série raconte la guerre sanglante des cartels en Colombie.",
       rate:"19",
    },
  ]




  export const Input = ()=>{

    let [name, setName] = useState("");
    let nameRef = useRef();
    const submitButton = () => {
      setName(nameRef.current.value);
    }


    let [rate, setRate] = useState("");
    let rateref = useRef();
    const submitBtn = () => {
      setRate(rateref.current.value);
    };

    const [img, setImg] = useState();

    const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
  
    return (
      <div>

       <div>
        <label>Put the title here</label>
       <input
  placehoder="title...." ref={nameRef} type="text"/>
<button type="button" onClick={submitButton}>
  Submit
</button>
       </div>

        <div style={{display:"flex",alignItems:"center"}}>
          <label>Title: </label>
         <p>{name.toLocaleUpperCase()}</p>
        </div>
        <div>
          <label>Choisir un poster: </label>
        <input type="file" onChange={onImageChange} />
        <img src={img} alt="" width={"400px"}/>
        </div>
      </div>
    );
  }
