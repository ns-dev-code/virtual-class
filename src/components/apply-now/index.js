import React , { useState , useEffect } from 'react'
import { Typography , Container , Grid , Paper, TextField , Fab } from '@material-ui/core'
import { useStyles } from './apply-styles'
import firebase from '../../lib/firebase'
import { Markdown } from 'react-showdown'
import file from '../../images/file.png'
import $ from 'jquery'
import { withSnackbar } from 'notistack'
import { useTranslation } from 'react-i18next'
import Progress from '../../lib/loading'

 function ApplyNow(props) {
    const { id } = props 
    const { t } = useTranslation('translation')
    const classes = useStyles()
    const [loading,setLoading] = useState(false)
    const [state,setState] = useState({
            file:null,
            type:null
    })
    const [message,setMessage] =useState('Upload your CV')
    const [openings,setOpenings] = useState(null)
    const [data,setData] = useState({
            firstName:'',
            lastName:'',
            email:'',
            phoneNo:'',
    })

    useEffect(()=>{
            if(id){
                    firebase.db.collection('openings').doc(id).get()
                    .then(docRef=>{
                       setOpenings(docRef.data())
                    })
                    .catch(error=>{
                       props.enqueueSnackbar(error.message,{variant:'error'})
                    })
            }
    },[])

    const handleChange = (event) =>{
        setData({
                ...data,
                [event.target.name]:event.target.value
        })
    }
    const onFileLoad = async(event) =>{
        let file = event.target.files[0]
        let reader = new FileReader()
     
        let fileType = null
        if(file &&(file.type !== 'application/pdf' || file.type === 'application/msword')){
                return props.enqueueSnackbar('File format not supported',{variant:'error'})
        }

        if(file && (file.type === 'application/pdf' || file.type === 'application/msword')){

               if(file.type === 'application/pdf'){
                  fileType = 1
               }else{
                  fileType = 2
               }
               if(file){
                let data= new FormData()
                data.append('file',file)
                setState({
                        file:file
                })
        }
        reader.onloadend = () =>{
               if(fileType === 1){
                setState({
                        ...state,
                        file:file,
                        type:'PDF'
                })
               }else{
                setState({
                        ...state,
                        file:file,
                        type:'DOC'
                })
               }
               setMessage('Uploaded')
        }

        reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async() =>{
            try{
                const { firstName , lastName , email , phoneNo } = data
                if((!firstName && !lastName && !email && !phoneNo ) && state.file==null ){
                       props.enqueueSnackbar('All Fields are required',{variant:'warning'})
                }
                else{
                        setLoading(true)
                        firebase.db.collection('applications').add(data)
                        .then(async(docRef)=>{
                                const res = await firebase.storage.ref(`/applications/${Date.now()}_${email}`).put(state.file)
                                await firebase.db.collection('applications').doc(docRef.id)
                                .set({
                                        fileUrl:await res.ref.getDownloadURL(),
                                        appliedOn:Date.now(),
                                        appliedId:docRef.id,
                                        opening_id:id
                                },{merge:true})
                        })
                        .then(()=>{
                               handleReset()
                               props.enqueueSnackbar('Application Sent',{variant:'success'})
                        })
                        .catch(error=>{
                                handleReset()
                                props.enqueueSnackbar(error.message,{variant:'error'})
                        })
                }
            }
            catch(error){
                    handleReset()
                    props.enqueueSnackbar(error.message,{variant:'error'})
            }
    }
        const handleReset = () =>{
                setLoading(false)
                setState({
                        file:null,
                        type:null
                })
                setData({
                        firstName:'',lastName:'',email:'',phoneNo:''
                })
                setMessage('Upload your CV')
        }
      if(openings){
        return (
       
                <React.Fragment>
                        <Container maxWidth="lg">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6} className={classes.jobDescription}>
                                <Paper className={classes.root}>
                                        <div className={classes.content}>
                                                <Typography variant="h4" className={classes.text}>{openings.company}</Typography>
                                                <Typography><Markdown markup={openings.description}/></Typography>
                                        </div>
                                </Paper>       
                                </Grid>
                                <Grid xs={12} sm={6} md={6}>
                                        <Paper className={classes.root}>
                                                <div className={classes.content}>
                                                <Typography variant="h6" align="center" className={classes.textApply}>{t('apply.Apply Here')}</Typography>
                                                        <div className={classes.formWrapper}>
                                                                <Grid container spacing={2} className={classes.uploadImage}>
                                                                <Grid item xs={12} sm={6} md={6}>
                                                                                <TextField
                                                                                        id="firstName"
                                                                                        label="Firstname"
                                                                                        placeholder="Enter First Name"
                                                                                        name="firstName"
                                                                                        variant="outlined"
                                                                                        onChange={handleChange}
                                                                                        value={data.firstName}
                                                                                        fullWidth
                                                                                />
                                                                        </Grid>
                                                                        <Grid item xs={12} sm={6} md={6}>
                                                                                <TextField
                                                                                        id="lastName"
                                                                                        label="Lastname"
                                                                                        placeholder="Enter Last Name"
                                                                                        name="lastName"
                                                                                        onChange={handleChange}
                                                                                        value={data.lastName}
                                                                                        variant="outlined"
                                                                                        fullWidth
                                                                                />
                                                                        </Grid>
                                                                        <Grid item xs={12} >
                                                                                <TextField
                                                                                        id="email"
                                                                                        label="Email"
                                                                                        placeholder="Enter Email"
                                                                                        name="email"
                                                                                        variant="outlined"
                                                                                        onChange={handleChange}
                                                                                        value={data.email}
                                                                                        fullWidth
                                                                                />
                                                                        </Grid>
                                                                        <Grid item xs={12} >
                                                                                <TextField
                                                                                        id="phoneNo"
                                                                                        label="Phoneno"
                                                                                        placeholder="Enter Phone Number"
                                                                                        name="phoneNo"
                                                                                        variant="outlined"
                                                                                        onChange={handleChange}
                                                                                        value={data.phoneNo}
                                                                                        fullWidth
                                                                                />
                                                                        </Grid>
                                                                        <Grid item xs={12} >
                                                                                <Fab
                                                                                        variant="extended"
                                                                                        size="medium"
                                                                                        color="primary"
                                                                                        arial-label="uploadFile"
                                                                                        onClick={()=>{
                                                                                                $('#file').trigger('click')
                                                                                        }}
                                                                                >
                                                                                  <img src={file} alt="upload" style={{width:'30px'}}/>
                                                                                  {t('apply.Upload Your CV')}
                                                                                </Fab>
                                                                                <TextField
                                                                                        id="file"
                                                                                        name="uploadFile"
                                                                                        type="file"
                                                                                        label="Upload Logo"
                                                                                        style={{
                                                                                                display:'none'
                                                                                        }}
                                                                                        onChange={onFileLoad}
                                                                                />
                                                                               
                                                                        </Grid>
                                                                        
                                                                        <Grid item xs={12} >
                                                                               <Typography align="center">
                                                                                        <Fab
                                                                                                variant="extended"
                                                                                                color="secondary"
                                                                                                onClick={handleSubmit}
                                                                                                disabled={loading}
                                                                                        >
                                                                                          {t('apply.Send Application')}
                                                                                          {loading == true && <Progress loading="true"/>}
                                                                                        </Fab>
                                                                               </Typography>
                                                                        </Grid>
                                                                </Grid>
                                                        </div>
                                                </div>
                                        </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                </React.Fragment>
        )
    
      }else{
              return (
                     <Container maxWidth="lg">
                              <Typography variant="h6">{t('Loading')}..</Typography>
                     </Container>
              )
      }
}

export default withSnackbar(ApplyNow)
