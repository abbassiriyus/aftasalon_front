'use client'
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import '../css/Search.css'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { IoIosCloseCircle } from 'react-icons/io'
import Pagination from '@mui/material/Pagination';
import axios from "axios";
import url from './Host'
import Stack from '@mui/material/Stack';
export default function Search() {
 
  const [model, setModel] = React.useState([])
  const [selectModel, setSelectModel] = React.useState("")
  const [series, setSeries] = React.useState([])
  const [selectSeries, setSelectSeries] = React.useState("")
  const [position, setPosition] = React.useState([])
  const [selectPosition, setSelectPosition] = React.useState("")
  const [fuelsort,setFuelsort ] = React.useState([])
  const [selectFuelsort, setSelectFuelsort] = React.useState("")
  const [gearBox,setGearBox ] = React.useState([])
  const [selectGearBox, setSelectGearBox] = React.useState("")
  const [garant,setgarant ] = React.useState([])
  const [selectgarant, setSelectgarant] = React.useState("")
  const [branch,setBranch ] = React.useState([])
  const [selectBranch, setSelectBranch] = React.useState("")
  const [makes, setMakes] = React.useState([])
  const [year, setYear] = React.useState('');
  const [mincount, setmincount] = React.useState('');
  const [maxcount, setmaxcount] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [countpag, setCountpag] = React.useState(1);

  const abbasFilter=(model1,seria1,position1,gearBox1,fuelsort1,garant1,branch1,year1,mincount1,maxcount1)=>{
    var pushdata=[]
axios.get(`${url}/api/cars_get/`).then(res=>{
  axios.get(`${url}/api/images/`)
  .then((res1) => {
   for (let i = 0; i < res.data.length; i++) {
    res.data[i].image=[]
   for (let j = 0; j < res1.data.length; j++) {
    if(res.data[i].id==res1.data[j].car){
      res.data[i].image.push(res1.data[j])
    }
  }}
  res.data.map(item=>{
    console.log(year1);
    
    if(
      (model1!=""?(item.position.series.model.id===model1):(true))
      &&
      (seria1!=""?(item.position.series.id===seria1):(true))
      &&
      (position1!=""?(item.position.id===position1):(true))
      &&
      (branch1!=""?(item.branch.id===branch1):(true))
      &&
      (fuelsort1!=""?(item.fuel_sort.id===fuelsort1):(true))
      &&
      (gearBox1!=""?(item.gearbox.id===gearBox1):(true))
      &&
      (garant1!=""?(item.garant.id===garant1):(true))
      &&
      (year1!=""?(item.year===year1*1):(true))
      &&
      (mincount1!=""?(item.price>mincount1*1):(true))
      &&
      (maxcount1!=""?(item.price<maxcount1*1):(true))
    ){
pushdata.push(item)

    }
  })
  setCountpag(Math.floor((pushdata.length)/10)+1)
  setMakes(pushdata)

})



})
  }
  function getData2(key){
    console.log(key);
    localStorage.setItem("oneproduct",JSON.stringify(key))
    window.location="/onecar"
    }

  const handleChange = (event) => {
    setPage(event.target.value)
  };
  const handleModel = (event) => {
    console.log(event.target.value,"kkkk");
    abbasFilter(event.target.value,"","",selectGearBox,selectFuelsort,selectgarant,selectBranch,year,mincount,maxcount)
    setSelectModel(event.target.value);
    axios.get(`${url}/api/series_get/`).then(res => {   
      const search = res.data.filter(item=>item.model.id===event.target.value)
      setSeries(search)
      setSelectSeries("")
      setSelectPosition("")
      setPosition([])
    })

  }
  const handleSeries = (event) => {
    setSelectSeries(event.target.value);
    console.log(event.target.value,"kkkk");
    
      axios.get(`${url}/api/position_get/`).then(res2 => {   
        const search2 = res2.data.filter(item=>item.series.id===event.target.value)
        setSelectPosition("")
        if(event.target.value=""){
         setPosition([])
        }else{
          setPosition(search2) 
        }
       
      })
      abbasFilter(selectModel,event.target.value,"",selectGearBox,selectFuelsort,selectgarant,selectBranch,year,mincount,maxcount)
      

   
  }
  const handlePosition = (event) => {
    setSelectPosition(event.target.value);
      abbasFilter(selectModel,selectSeries,event.target.value,selectGearBox,selectFuelsort,selectgarant,selectBranch,year,mincount,maxcount)

  }
  const handleFuelsort= (event) => {
    setSelectFuelsort(event.target.value);
    abbasFilter(selectModel,selectSeries,selectPosition,selectGearBox,event.target.value,selectgarant,selectBranch,year,mincount,maxcount)
  }
  const handleGearBox= (event) => {
    setSelectGearBox(event.target.value);
    const searchdata=makes.filter(item=>
      item.gearbox.id===event.target.value
    )
    abbasFilter(selectModel,selectSeries,selectPosition,event.target.value,selectFuelsort,selectgarant,selectBranch,year,mincount,maxcount)
   setMakes(searchdata)
  }
  const handlegarant= (event) => {
    setSelectgarant(event.target.value);
    const searchdata=makes.filter(item=>
      item.garant.id===event.target.value
    )
    abbasFilter(selectModel,selectSeries,selectPosition,selectGearBox,selectFuelsort,event.target.value,selectBranch,year,mincount,maxcount)
   setMakes(searchdata)
  }
  const handleBranch= (event) => {
    setSelectBranch(event.target.value);
    const searchdata=makes.filter(item=>
      item.branch.id===event.target.value
    )
    abbasFilter(selectModel,selectSeries,selectPosition,selectGearBox,selectFuelsort,selectgarant,event.target.value,year,mincount,maxcount)
   setMakes(searchdata)
  }
  function handleyear (id) {
    setYear(id.target.value)
    console.log(id.target.value,"LOG");
    
    abbasFilter(selectModel,selectSeries,selectPosition,selectGearBox,selectFuelsort,selectgarant,selectBranch,id.target.value,mincount,maxcount)
  }
  function minChange (id) {
    setmincount(id.target.value)
    abbasFilter(selectModel,selectSeries,selectPosition,selectGearBox,selectFuelsort,selectgarant,selectBranch,year,id.target.value,maxcount)
  }
  function maxChange (id) {
    setmaxcount(id.target.value)
    abbasFilter(selectModel,selectSeries,selectPosition,selectGearBox,selectFuelsort,selectgarant,selectBranch,year,mincount,id.target.value)
  }
  function getData(key){
    console.log(key);
    localStorage.setItem("oneproduct",JSON.stringify(key))
    window.location="/onecar"
    }

  const openModal2 = () => {
    document.querySelector('.mobile_search').classList.add('db')
  }
  const closeModal2 = () => {
    document.querySelector('.mobile_search').classList.remove('db')
  }
  useEffect(() => {
    axios.get(`${url}/api/cars_get/`).then(res => {  
      axios.get(`${url}/api/images/`)
      .then((res1) => {
       for (let i = 0; i < res.data.length; i++) {
        res.data[i].image=[]
       for (let j = 0; j < res1.data.length; j++) {
        if(res.data[i].id==res1.data[j].car){
          res.data[i].image.push(res1.data[j])
        }
      }}
   
     setMakes(res.data)
      setCountpag(Math.floor((res.data.length)/10)+1)
    
    
    }) 
     
    }).catch(err => {
      console.log(err, "salom");
    })
    
    axios.get(`${url}/api/models/`).then(res => {   
      setModel(res.data)
      axios.get(`${url}/api/series_get/`).then(res2 => {   
        setSeries(res2.data)
        axios.get(`${url}/api/position_get/`).then(res3 => {   
          setPosition(res3.data)
          axios.get(`${url}/api/fuel_sort/`).then(res4 => {   
            setFuelsort(res4.data)
            axios.get(`${url}/api/gear_box/`).then(res5 => {   
              setGearBox(res5.data)
              axios.get(`${url}/api/garant/`).then(res6 => {   
                setgarant(res6.data)
                axios.get(`${url}/api/branch/`).then(res7 => {   
                  setBranch(res7.data)
                })
              })
            })
          })
        })
      })
    })


  }, [])

  return (
    <div>
      <Navbar />
      <div className='search_top'>
        <div className='search_top_body'>
          <Box>
          <FormControl className='inpsearch'>
      <InputLabel id='demo-simple-select-label'>Модель</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={selectModel}
        label="Model"
        onChange={handleModel}
      >
          <MenuItem value="">None</MenuItem>
        {model.map((item) => (
          <MenuItem value={item.id}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Серия</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectSeries}
                 label='Series'
                onChange={handleSeries}
              >
          <MenuItem value="">None</MenuItem>

                {series.map((item) => (
                   <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Позиция</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectPosition}
                label='Position'
                onChange={handlePosition}
              >
               <MenuItem value="">None</MenuItem>
                {position.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Тип топливы</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectFuelsort}
                label='fuel_sort'
                onChange={handleFuelsort}
              >
              <MenuItem value="">None</MenuItem>
                {fuelsort.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Коробка передач</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectGearBox}
                label='Gear Box'
                onChange={handleGearBox}
              >
          <MenuItem value="">None</MenuItem>
                {gearBox.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Box>
          <div className='boxPrice'>
            <input
              type='text'
              className='searchInp priceInp1'
              placeholder='Минимальная цена'
               onKeyUp={minChange}
              
            />
            <input
              type='text'
              className='searchInp priceInp2'
              placeholder='Максимальная цена'
              onKeyUp={maxChange}
            />
          </div>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Гарантия</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectgarant}
                label='Garant'
                onChange={handlegarant}
              >
          <MenuItem value="">None</MenuItem>
                {garant.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
              <InputLabel id='demo-simple-select-label'>Филиал </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectBranch}
                label='Branch'
                onChange={handleBranch}
              >
                {branch.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Box>
          <Box>
          </Box>
          <Box>
            <FormControl className='inpsearch'>
             
                  <input 
                  className='searchInp input_year'
      type="text" 
      min="1900" 
      max="2100" 
      minLength='4'
      onKeyUp={handleyear}
      placeholder='Год'
    />
            </FormControl>
          </Box>
        </div>
        <button className='btnOpen' onClick={openModal2}>
        Фильтр
        </button>
        <div className='mobile_search'>
          <div className='mobile_top'>
            <h2>Filters</h2>
            <IoIosCloseCircle className='closeModalMob' onClick={closeModal2} />
          </div>
          <div className='mobile_body'>
            <Box className='searchBox'>
            <FormControl className='inpsearch2'>
      <InputLabel id='demo-simple-select-label'>Модель</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={selectModel}
        onChange={handleModel}
      >
        {model.map((item) => (
          <MenuItem value={item.id}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
            </Box>
            <Box className='searchBox'>
            <FormControl className='inpsearch2'>
              <InputLabel id='demo-simple-select-label'>Серия</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectSeries}
                label='Series'
                onChange={handleSeries}
              >
                {series.map((item) => (
                   <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            </Box>
            <Box className='searchBox'>
            <FormControl className='inpsearch2'>
              <InputLabel id='demo-simple-select-label'>Позиция </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectPosition}
                label='Position'
                onChange={handlePosition}
              >
                {position.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
            </Box>
            <Box className='searchBox'>
            <FormControl className='inpsearch2'>
              <InputLabel id='demo-simple-select-label'>Тип Топливы</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectFuelsort}
                label='fuel_sort'
                onChange={handleFuelsort}
              >
                {fuelsort.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
            </Box>
            <Box className='searchBox'>
            <FormControl className='inpsearch2'>
              <InputLabel id='demo-simple-select-label'>Коробка передач</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectGearBox}
                label='Gear Box'
                onChange={handleGearBox}
              >
                {gearBox.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
            </Box>
            <div className='boxPrice boxprice2'>
            <input
              type='text'
              className='searchInp priceInp1'
              placeholder='Минимальная цена'
               onKeyUp={minChange}
              
            />
            <input
              type='text'
              className='searchInp priceInp2'
              placeholder='Максимальная цена'
              onKeyUp={maxChange}
            />
            </div>
            <Box className='searchBox'>
            <FormControl className='inpsearch2'>
              <InputLabel id='demo-simple-select-label'>Гарантия</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectgarant}
                // label='Mileage'
                onChange={handlegarant}
              >
                {garant.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
            </Box>
            <Box className='searchBox'>
            <FormControl className='inpsearch2'>
              <InputLabel id='demo-simple-select-label'>Филиал</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectBranch}
                // label='Drive'
                onChange={handleBranch}
              >
                {branch.map(item => {
                  return <MenuItem value={item.id}>{item.name}</MenuItem>
                })}
              </Select>
            </FormControl>
            </Box>
            <Box className='searchBox'>
            <FormControl className='inpsearch2'>
               <input 
               className='searchInp input_year'
      type="text" 
      min="1900" 
      max="2100" 
      minLength='4'
      placeholder="Год"
      onKeyUp={handleyear}
    />
            </FormControl>
            </Box>

            <button className='btnSearch'>Поиск</button>
          </div>
        </div>
      </div>
      <div className='search_body'>
        <div className="body_top">
          <h2>Результаты</h2>
        </div>        
        <div className="result_wrapper">
          {makes.map((item,key) => {
            if(key>page-2 && key<page*10){
            return (
              <div key={key} onClick={()=>getData(item)} className='feat_card2'>
                <div>
                  <h1 className="salesale">{item.sale==0?(""):(`${item.sale}%`)}</h1>
                  <img src={item.image[0]!=undefined?(item.image[0].image):("https://demo.vehica.com/wp-content/uploads/2020/08/2-4-670x372.jpg")}
                      alt="no img" />
                  <div className='featCard_bottom'>
                    <div className='feat-cardorab'><h3 className='featCard_name'>{item.name}</h3><del>{item.sale==0?(""):(`${item.price}.sum`)}</del></div>
                    <h4 className='featCard_price'>{
                    item.sale==0?(item.price):(`${item.price-((item.price*item.sale/100).toFixed(0))}`)
                    
                    }.sum</h4>
                    <div className='featCard_box'>
                      <p className='featCard_year'>{item.year}</p>
                      <p className='featCard_auto'>{item.gearbox.name}</p>
                      <p className='featCard_pet'>{item.fuel_sort.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          })}
          </div>
        
          <Stack spacing={2}>
      <Pagination count={countpag} page={page} onChange={handleChange} color="secondary"/>
    </Stack>
      </div>
    </div>
  )
}
