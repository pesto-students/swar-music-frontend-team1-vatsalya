import { Avatar, Grid, Paper, Typography,TextField ,Button, Checkbox, FormControlLabel, Select} from '@mui/material'
import {InputLabel,MenuItem,FormControl} from '@mui/material';
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
import {useFormik}  from 'formik';
 import * as yup from 'yup';

 const countryList = [
  "Afghanistan",
  "Åland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan (Province of China)",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];






const paperstyle={padding :20,width:450,margin:"0 auto"}
const textstyle={margin:0}
const tstyle={margin:'5px 0'}

const initialValues ={
  name:'',
  email:'',
  phonenumber:'',
  password:'',
  cpassword :'',
  checkbox:''
};

const onSubmit = values =>{
  console.log('Form data',values);
};

const validationSchema = yup.object({
   name : yup.string('Enter your username').required('Username is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  phonenumber : yup.number('Enter your number').max(10,'Mobile Number should be of minimum 10 characters length').required('Mobiel numebr is required').integer('interger'),
  cpassword: yup.string().oneOf([yup.ref('Enter your confirm password'), null], 'Passwords must match'),
  checkbox: yup.boolean().oneOf([true], "Required terms of use").required("Required terms of use"),
})


function Signup() {

  const formik = useFormik({initialValues, onSubmit, validationSchema: validationSchema });
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

 //console.log('Form values',formik.values);
  return (
    <Grid>
        <Paper elevation={20} style={paperstyle}>
            <Grid align ='center'>
            <Avatar   sx={{ color: 'black', backgroundColor: 'pink', borderColor: 'black',mt:0,mb:0}}>
          <LockIcon/>
</Avatar>
<h2 style={textstyle}> Sign Up </h2>
<Typography component={'span'} variant='caption' gutterBottom> Please fill this form to create an account !</Typography>
            </Grid>
            <form onSubmit={formik.handleSubmit}>
            <TextField id="name" name="name" label='Enter User Name' placeholder='Enter User Name' style={tstyle} fullWidth required onChange={formik.handleChange} value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            />
            <TextField id="email" name="email" label='Email' placeholder='Enter Email Address' style={tstyle} fullWidth required onChange={formik.handleChange} value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            />
            <TextField id="phonenumber" name="phonenumber" label='Mobile Number' placeholder='Enter Mobile Number' style={tstyle} fullWidth required onChange={formik.handleChange} value={formik.values.number}
            error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
            helperText={formik.touched.phonenumber && formik.errors.phonenumber}
            />
            <TextField id="password" name="password" label='Password' placeholder='Enter Password' style={tstyle} fullWidth required onChange={formik.handleChange} value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            />
            <TextField id="cpassword" name="cpassword"label='Confirm Password' placeholder='Enter Confirm Password' style={tstyle} fullWidth required onChange={formik.handleChange} value={formik.values.cpassword}
            error={formik.touched.cpassword && Boolean(formik.errors.cpassword)}
            helperText={formik.touched.cpassword && formik.errors.cpassword}/>
            

        <FormControl    placeholder="Select Your Country " fullWidth>
        <InputLabel id="countrieslabel"   placeholder="Select Your Country ">Countries</InputLabel>
        <Select
          labelId="countries-select-labe;"
          id="countries"
          name="countries"
          value={country}
          label= "countries"
          placeholder="Select Your Country "
          onChange={handleChange}
        >
             {countryList.map((option, index) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
     


      <FormControlLabel control ={<Checkbox id="checkbox" name="checkbox" color="primary"required
      error={formik.touched.checkbox && Boolean(formik.errors.checkbox)}
      helperText={formik.touched.checkbox && formik.errors.checkbox}
      
      /> } 
        name='checkbox' label=' I accept the terms and conditions'  />

            <Button type='submit' variant='contained' 
            sx={{ color: 'black', backgroundColor: 'pink', borderColor: 'black',mt:3,mb:2}}
            full width > Sign Up</Button>
            </form>

        </Paper>
    </Grid>
  )
}

export default Signup