import { useState } from "react"

const Section = ({title,desc,isVisible,setIsVisible})=>{
    return(
        <div className="section">
            <h2 className="main-title">{title}</h2>
            <div className="section-child">
                {isVisible && <p>{desc}</p>}
                {isVisible ? 
                (<button className="button-5" onClick={()=>setIsVisible(false)}>Hide</button>)
                :
                (  <button className="button-5" onClick={()=>setIsVisible(true)}>Show</button>)
                }
            </div>
            
        </div>
    )
}

const Contact = ()=>{
    const [visibleSection, setVisibleSection] = useState(false);

    return(
        <div className="contact-us">
            <h1 className="contact">About Us</h1>
            <Section title={'About Team'}
            desc={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
            isVisible={visibleSection === 'about'}
            setIsVisible={()=> setVisibleSection('about')}
            />

            <Section title={'About Restraunts'}
            desc={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
            isVisible={visibleSection === 'team'}
            setIsVisible={()=> setVisibleSection('team')}
            />
            <Section title={'About Items'}
            desc={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
            isVisible={visibleSection === 'data'}
            setIsVisible={()=> setVisibleSection('data')}
            />
        </div>
    )
}

export default Contact;