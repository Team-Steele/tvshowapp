import { useState, useEffect } from 'react';
function Dummy() {
    const [dummy, setDummy] = useState([]);

    useEffect(() => {
        fetch("/dummy/") .then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setDummy(jsonRes.dummyList))
    })

    return <div>
        {dummy.map(dummy => <li></li>)}
    </div>

}


export default Dummy 