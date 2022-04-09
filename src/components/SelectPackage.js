import React, {useState, useEffect} from 'react'

import './SelectPackage.css'



export default function SelectPackage() {

  const packages = ['Package 1', 'Package 2', 'Package 3', 'Package 4', 'Package 5', 'Package 6', 'Package 7', 'Package 8', 'Package 9', 'Package 10'];
  const [l1, setL1] = useState(packages);
  const [l2, setl2] = useState([]);


  const addPackage = (e) =>{
    console.log(e.target.innerText);

    let currentItem = e.target.innerText;

    let idx = l1.findIndex(item => item===currentItem)
    
    if(idx<0) return;

    // if l2 contains currentItem dont add
    setl2(addItemToArray(l2,l1[idx]))
    setL1(removeItemFromArray(l1,l1[idx]))
  } 
  
  function removeItemFromArray(array, n) {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    newArray.sort();
    return newArray;
}

function addItemToArray(array, n) {
  const newArray = [];
  newArray.push(...array);
  newArray.push(n);
  newArray.sort()
  return newArray;
}

  const removePackage = (e) =>{
    console.log(e.target.innerText);

    let currentItem = e.target.innerText;

    let idx = l2.findIndex(item => item===currentItem)
    
    if(idx<0) return;

    // if l2 contains currentItem dont add
    setL1(addItemToArray(l1,l2[idx]))
    setl2(removeItemFromArray(l2,l2[idx]))
  }

  const clear = () => {
    setL1(packages);
    setl2([]);
  }

  const savePackageList = () =>{
    let temp = [];
    l2.forEach(item => temp.push(item))
    sessionStorage.setItem("packages",temp);    
  }

  useEffect(()=>{
    console.log(`l1 = ${l1.forEach(i=> console.log(i))}`);
  },[l1])


  return <>
      <div className='packageList'>
      {
        l1 && l1.map(item => <div key={item} className='package-item' onClick={addPackage}>{item}</div>)
      }
      </div>
      
      <hr />

      <div className='packageList'>
        {
          l2 && l2.map(item => <div key={item} className='package-item' onClick={removePackage}>{item}</div>) 
        }
      </div>
      <button onClick={clear}>CLEAR</button>
      <button onClick={savePackageList}>SAVE</button>
  </>
}

// export default function SelectPackage() {

//   const [mainPackageList, setMainPackageList] = useState([]);

//   const packages = ['Package 1', 'Package 2', 'Package 3', 'Package 4', 'Package 5', 'Package 6', 'Package 7', 'Package 8', 'Package 9', 'Package 10'];


//   const addPackage = (e) => {

//     const packageToAdd = e.target.innerText;

//     console.log(packageToAdd);
//     e.target.style.display = 'none';

//     setMainPackageList(packageList => [...mainPackageList, packageToAdd])

//   }

//   const removePackage = (e) => {
//     const packageToRemove = e.target.innerText;
//     console.log(packageToRemove);
//     e.target.style.display = 'visible';
    
//     let newList = mainPackageList.filter((p => p !== packageToRemove));
//     setMainPackageList(newList)

   
//     // packageList.filter(item => item === packageToRemove)
//   }

//   const clear = () =>{
//     setMainPackageList([]);
//     setMainPackageList([...packages])
//   }

//   useEffect(() => {
//     console.log(` selected packages ${mainPackageList}`);
//   }, [mainPackageList])

//   useEffect(()=>{

//   }
//   ,[])
  

//   return (
//     <div>
//       <div className='packageList'>
//       {
//         packages && packages.map(p => (<button onClick={addPackage} key={p} className="package-item" id={p}>{p}</button>) )
//       }
//       </div>

//       <h1>SELECTED PACKAGES</h1>


//       <ul className='packageList2'>
//         {
//           mainPackageList && mainPackageList.map(p => <h1 key={p} >{p}</h1>)
//         }
//       </ul>
//       <button onClick={clear}>CLEAR</button>

//     </div>
//   )
// }
  //const packagses = ['Package 1', 'Package 2', 'Package 3', 'Package 4', 'Package 5', 'Package 6', 'Package 7', 'Package 8', 'Package 9', 'Package 10'];


// const [unchosenItems, setUnchosenItems] = useState(packages);
  // const [chosenItems, setChosenItems] = useState([]);


  // const addPackage = (e) => {
  //   let selectedPackage = e.target.innerText;
  //   console.log(`selectedPackage ${selectedPackage}`);
  //   console.log(`find ${chosenItems.find(item => item===selectedPackage)}`);
    
  //    if(!chosenItems.find(item => item===selectedPackage)){
  //     setChosenItems([...chosenItems, selectedPackage]);
  //   //   let idx = unchosenItems.findIndex(item=>item === selectedPackage)
  //   //   setUnchosenItems(unchosenItems.splice(idx,1))
  //    }
  // }

  // const removePackage = (e) => {
  //   let selectedPackage = e.target.innerText;
  //   let idx = chosenItems.findIndex(item=> item===selectedPackage )
  //   if(idx>=0){
  //     console.log(idx);
  //     chosenItems.splice(idx,1);
  //     setChosenItems(chosenItems);
  //   }
  // }

  // const clear = () =>{
    
  // }

  // useEffect(() => {
  //   console.log(`chosenItems ${chosenItems}`);

  // }, [chosenItems])
  
  //return

      // <div>
    //   <div className='packageList'>
    //     {
    //       unchosenItems && unchosenItems.map(p => <h1 onClick={addPackage} key={p} className="package-item">{p}</h1> )
    //     }
    //   </div>

    //   <hr />

    //   <div className='chosen-packages-list'>
    //     {
    //       chosenItems && chosenItems.map(item => <h1 onClick={removePackage} key={item} className="package-item" >{item}</h1>)
    //     }
    //   </div>

    //   <button onClick={clear}>CLEAR</button>
    // </div>