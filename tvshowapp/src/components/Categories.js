import { useState, useEffect } from 'react';

function Category() {
    const [category, setcategory] = useState([]);

    useEffect(() => {
        fetch("/category") .then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setcategory(jsonRes.categoryList))
    })

    return <div>
        {category.map(category => <li>{category}</li>)}
    </div>

}


export default Category 