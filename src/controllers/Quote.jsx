import axios from "axios";
import { useState, useEffect} from "react";

const API = process.env.REACT_APP_API_URL;

function Quote() {
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}`)
        .then((res) => setQuote(res.data))
        .catch((e) => console.warn("catch", e))
    }, [])

    return (
        <> 
        <div className="background">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate accusamus quo fugiat minus hic similique inventore! Mollitia quasi voluptate fuga deserunt. Ea officia ex perferendis? Dolore voluptas magni eaque, quos distinctio dolorem consectetur mollitia facere in aut quae obcaecati neque tempore suscipit recusandae rerum labore excepturi fugit perspiciatis repellendus? Illum, consectetur! Repudiandae quisquam nulla nihil deserunt nemo inventore rem hic, recusandae aspernatur repellat, tempora quae velit voluptates laborum, quam porro reiciendis pariatur aliquam ratione dolor. Expedita laboriosam blanditiis, totam aliquam eos enim molestiae nulla possimus, molestias sit, nam sed quidem voluptate minima? Totam odit optio, id iste ea, minima, modi error odio libero asperiores cupiditate minus explicabo omnis deserunt eveniet in aspernatur. Atque asperiores enim nobis beatae nostrum ipsum deserunt dolor rerum magni minus harum doloribus, et illo amet explicabo, rem architecto quis soluta in praesentium. Totam eius officia perferendis voluptate consequuntur assumenda nesciunt eos cum dignissimos dolores quae maiores voluptatibus accusamus quibusdam ea molestiae, ullam labore sequi aliquam reiciendis animi fugit? Quasi amet velit minus. Ullam doloremque enim assumenda repudiandae. Aperiam ipsam aliquid, modi dolore dolor fuga quod nesciunt minima. Accusantium facilis quam ea animi velit voluptatum ut ipsam quia doloremque voluptatem, atque assumenda molestias, recusandae debitis, quae fugiat praesentium corporis cumque aliquam laudantium aut labore cupiditate? Debitis officia sint numquam harum magnam error distinctio est perspiciatis consequatur, eaque quae suscipit, animi veritatis quibusdam nihil dolorem aliquid dolorum, laborum deleniti iste ut totam aliquam? Hic dolorum dolore atque reprehenderit earum laborum! Magni consequatur sunt maiores blanditiis aperiam ipsam rerum earum odio corrupti, totam tempore nemo nihil iusto, animi sequi excepturi! Itaque laudantium perferendis reiciendis, maiores saepe pariatur repudiandae minima iure eveniet quod, temporibus illo culpa aliquid possimus? Ratione distinctio in ipsa, ipsum illum, aliquid delectus rem quibusdam laboriosam fugiat voluptatum, recusandae explicabo tempora consectetur obcaecati ut modi optio nemo enim repellendus est perferendis. Cupiditate quas nemo corporis a velit dolorem neque delectus quod ex quos perspiciatis quo, non illum aliquid, architecto dolor, magni minus autem modi adipisci rerum voluptas id dolores. Omnis, odit? Distinctio, tempora quaerat! Modi ullam odit ipsum vitae blanditiis tenetur, accusantium aliquam beatae porro commodi sint reiciendis minima error molestiae accusamus. Voluptate nostrum possimus at numquam. Dicta accusantium dolor quaerat! Iusto nam nihil, labore molestiae molestias quis perspiciatis, explicabo magni quaerat repellat ipsam voluptatem aperiam optio, eligendi hic culpa facilis possimus cumque tempore. Quis voluptatem deleniti nemo vero? Tempore quia rem veniam, quibusdam quae eaque doloremque, itaque dicta, saepe ex architecto quos. Natus consectetur vitae eos perspiciatis, rem earum ut, modi accusantium laudantium cum quos temporibus deleniti molestiae hic aperiam ullam molestias vero provident aliquid nam distinctio voluptatibus? Impedit sunt voluptatibus quos, tenetur amet culpa deleniti quod adipisci atque ad, reiciendis illum? Voluptas, delectus perferendis totam dolores officia temporibus! Nesciunt obcaecati cupiditate eum molestias earum, doloremque nisi enim deleniti. Voluptatem omnis maiores voluptate eaque saepe, incidunt iusto fuga consequatur. Deserunt cum vero delectus amet minus enim soluta, illo cumque, voluptatum officiis harum, nulla libero asperiores. Eos id, maiores reiciendis amet dolores consectetur debitis magni neque sequi.</div>
        <div className="transparent"></div>
        <div className="quote-container">
            <p className="quote">{quote.quote}</p>
            <p>- {quote.author}</p>
        </div>
       
        </>
    )
}

export default Quote;