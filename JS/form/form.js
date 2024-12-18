JotForm.newDefaultTheme = false;
JotForm.extendsNewTheme = true;
JotForm.singleProduct = true;
JotForm.newPaymentUIForNewCreatedForms = false;
JotForm.newPaymentUI = true;

JotForm.setConditions([{ "action": [{ "id": "action_1673773572096", "isError": false, "skipTo": "page-1" }], "id": "1673773628247", "index": "0", "link": "Any", "priority": "0", "terms": [{ "id": "term_1673773572096", "field": "72", "operator": "equalDate", "value": "2023-01-15", "isError": false }], "type": "page" }]); JotForm.clearFieldOnHide = "disable";

JotForm.init(function () {
  /*INIT-START*/

  JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  JotForm.calendarOther = { "today": "Today" };
  var languageOptions = document.querySelectorAll('#langList li');
  for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
    languageOptions[langIndex].on('click', function (e) { setTimeout(function () { JotForm.setCalendar("72", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); }, 0); });
  }
  JotForm.onTranslationsFetch(function () { JotForm.setCalendar("72", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "" }); });
  JotForm.setPhoneMaskingValidator('input_94_full', '(####-#######)');
  JotForm.setPhoneMaskingValidator('input_107_full', '(####-#######)');
  JotForm.setPhoneMaskingValidator('input_108_full', '(####-#######)');
  JotForm.setPhoneMaskingValidator('input_100_full', '#####-#######-#');
  if (window.JotForm && JotForm.accessible) $('input_66').setAttribute('tabindex', 0);
  JotForm.setPhoneMaskingValidator('input_116_full', '(####-#######)');
  JotForm.setPhoneMaskingValidator('input_117_full', '(####-#######)');
  if (window.JotForm && JotForm.accessible) $('input_115').setAttribute('tabindex', 0);
  JotForm.setPhoneMaskingValidator('input_118_full', '#####-#######-#');
  JotForm.alterTexts({ "ageVerificationError": "You must be older than {minAge} years old to submit this form.", "alphabetic": "This field can only contain letters", "alphanumeric": "This field can only contain letters and numbers.", "ccDonationMinLimitError": "Minimum amount is {minAmount} {currency}", "ccInvalidCVC": "CVC number is invalid.", "ccInvalidExpireDate": "Expire date is invalid.", "ccInvalidNumber": "Credit Card Number is invalid.", "ccMissingDetails": "Please fill up the Credit Card details.", "ccMissingDonation": "Please enter numeric values for donation amount.", "ccMissingProduct": "Please select at least one product.", "characterLimitError": "Too many Characters.  The limit is", "characterMinLimitError": "Too few characters. The minimum is", "confirmClearForm": "Are you sure you want to clear the form?", "confirmEmail": "E-mail does not match", "currency": "This field can only contain currency values.", "cyrillic": "This field can only contain cyrillic characters", "dateInvalid": "This date is not valid. The date format is {format}", "dateInvalidSeparate": "This date is not valid. Enter a valid {element}.", "dateLimited": "This date is unavailable.", "disallowDecimals": "Please enter a whole number.", "email": "Enter a valid e-mail address", "fillMask": "Field value must fill mask.", "freeEmailError": "Free email accounts are not allowed", "generalError": "There are errors on the form. Please fix them before continuing.", "generalPageError": "There are errors on this page. Please fix them before continuing.", "gradingScoreError": "Score total should only be less than or equal to", "incompleteFields": "There are incomplete required fields. Please complete them.", "inputCarretErrorA": "Input should not be less than the minimum value:", "inputCarretErrorB": "Input should not be greater than the maximum value:", "lessThan": "Your score should be less than or equal to", "maxDigitsError": "The maximum digits allowed is", "maxSelectionsError": "The maximum number of selections allowed is ", "minSelectionsError": "The minimum required number of selections is ", "multipleFileUploads_emptyError": "{file} is empty, please select files again without it.", "multipleFileUploads_fileLimitError": "Only {fileLimit} file uploads allowed.", "multipleFileUploads_minSizeError": "{file} is too small, minimum file size is {minSizeLimit}.", "multipleFileUploads_onLeave": "The files are being uploaded, if you leave now the upload will be cancelled.", "multipleFileUploads_sizeError": "{file} is too large, maximum file size is {sizeLimit}.", "multipleFileUploads_typeError": "{file} has invalid extension. Only {extensions} are allowed.", "nextButtonText": "Next", "numeric": "This field can only contain numeric values", "pastDatesDisallowed": "Date must not be in the past.", "pleaseWait": "Please wait...", "prevButtonText": "Previous", "progressMiddleText": "of", "required": "This field is required.", "requireEveryCell": "Every cell is required.", "requireEveryRow": "Every row is required.", "requireOne": "At least one field required.", "reviewBackText": "Back to Form", "reviewSubmitText": "Review and Submit", "seeAllText": "See All", "submissionLimit": "Sorry! Only one entry is allowed.  Multiple submissions are disabled for this form.", "submitButtonText": "Submit", "uploadExtensions": "You can only upload following files:", "uploadFilesize": "File size cannot be bigger than:", "uploadFilesizemin": "File size cannot be smaller than:", "url": "This field can only contain a valid URL", "wordLimitError": "Too many words. The limit is", "wordMinLimitError": "Too few words.  The minimum is" });
  JotForm.alterTexts({ "couponApply": "Apply", "couponBlank": "Please enter a coupon.", "couponChange": "", "couponEnter": "Enter coupon", "couponExpired": "Coupon is expired. Please try another one.", "couponInvalid": "Coupon is invalid.", "couponValid": "Coupon is valid.", "shippingShipping": "Shipping", "taxTax": "Tax", "totalSubtotal": "Subtotal", "totalTotal": "Total" }, true);
  setTimeout(function () {
    JotForm.initMultipleUploads();
  }, 2);
  /*INIT-END*/
});

JotForm.prepareCalculationsOnTheFly([null, null, null, { "description": "", "name": "name", "qid": "3", "text": "Name", "type": "control_fullname" }, null, null, null, null, null, null, null, { "description": "", "name": "address11", "qid": "11", "text": "Address", "type": "control_address" }, null, null, null, null, null, null, null, { "name": "guardianInformation", "qid": "19", "text": "Guardian Information", "type": "control_head" }, null, null, null, null, null, { "name": "financialInformation", "qid": "25", "text": "Financial Information", "type": "control_head" }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, { "description": "", "name": "gender", "qid": "56", "subLabel": "", "text": "Gender", "type": "control_dropdown" }, null, null, null, null, null, null, null, null, { "description": "", "name": "name65", "qid": "65", "text": "Name", "type": "control_fullname" }, { "description": "", "name": "relationshipWith", "qid": "66", "subLabel": "", "text": "Relationship with candidate", "type": "control_textbox" }, null, null, null, null, null, { "description": "", "name": "dateOf72", "qid": "72", "text": "Date of Birth", "type": "control_datetime" }, null, null, null, null, null, null, null, { "name": "alamgirInstitute", "qid": "80", "text": "ALAMGIR INSTITUTE OF Enginering & Technology", "type": "control_head" }, null, null, null, null, null, null, { "name": "admissionForm", "qid": "87", "text": "Candidate Information", "type": "control_head" }, null, null, null, null, null, null, { "description": "", "name": "phoneNumber94", "qid": "94", "text": "Mobile #(Alternate)", "type": "control_phone" }, null, null, null, null, null, { "description": "", "name": "cnic", "qid": "100", "text": "CNIC #", "type": "control_phone" }, { "description": "", "name": "email", "qid": "101", "subLabel": "example@example.com", "text": "Email", "type": "control_email" }, { "description": "", "name": "email102", "qid": "102", "subLabel": "", "text": "Religion", "type": "control_email" }, null, { "description": "", "name": "religion104", "qid": "104", "subLabel": "", "text": "Domicile", "type": "control_email" }, null, null, { "description": "", "name": "mobilealternate", "qid": "107", "text": "Mobile #(Alternate)", "type": "control_phone" }, { "description": "", "name": "phone", "qid": "108", "text": "Phone # Residence", "type": "control_phone" }, null, null, null, { "description": "", "name": "email112", "qid": "112", "subLabel": "example@example.com", "text": "Email", "type": "control_email" }, null, null, { "description": "", "name": "occupationOf", "qid": "115", "subLabel": "", "text": "Occupation Of Guardian", "type": "control_textbox" }, { "description": "", "name": "phoneNo", "qid": "116", "text": "Phone no #", "type": "control_phone" }, { "description": "", "name": "mobile", "qid": "117", "text": "Mobile # (Alternate)", "type": "control_phone" }, { "description": "", "name": "cnic118", "qid": "118", "text": "CNIC #", "type": "control_phone" }, { "description": "", "name": "fileUpload", "qid": "119", "subLabel": "Upload pic", "text": "SSC Certificate or Marksheet", "type": "control_fileupload" }, { "name": "pictureOf", "qid": "120", "text": "Picture of the following documents ", "type": "control_head" }, { "description": "", "name": "passportSize", "qid": "121", "subLabel": "", "text": "Passport size Photograph", "type": "control_fileupload" }, null, { "description": "", "name": "cnicOf", "qid": "123", "subLabel": "", "text": "CNIC of Father\u002F Guardian", "type": "control_fileupload" }, null, null, null, null, null, null, null, null, null, null, null, null, null, { "name": "pageBreak", "qid": "137", "text": "Page Break", "type": "control_pagebreak" }, null, null, null, { "name": "submit", "qid": "141", "text": "Submit", "type": "control_button" }, null, { "name": "pageBreak143", "qid": "143", "text": "Page Break", "type": "control_pagebreak" }, { "description": "", "name": "applyingFor", "qid": "144", "subLabel": "", "text": "applying for scholarships?", "type": "control_dropdown" }, null, { "description": "", "name": "monthlyIncome", "qid": "146", "subLabel": "", "text": "Monthly Income", "type": "control_dropdown" }, { "description": "", "name": "noOf", "qid": "147", "subLabel": "", "text": "No of Family members", "type": "control_dropdown" }, { "description": "", "name": "typeA", "qid": "148", "text": "Type a question", "type": "control_checkbox" }, { "description": "", "name": "typeA149", "qid": "149", "subLabel": "", "text": "Type a question", "type": "control_dropdown" }]);
setTimeout(function () {
  JotForm.paymentExtrasOnTheFly([null, null, null, { "description": "", "name": "name", "qid": "3", "text": "Name", "type": "control_fullname" }, null, null, null, null, null, null, null, { "description": "", "name": "address11", "qid": "11", "text": "Address", "type": "control_address" }, null, null, null, null, null, null, null, { "name": "guardianInformation", "qid": "19", "text": "Guardian Information", "type": "control_head" }, null, null, null, null, null, { "name": "financialInformation", "qid": "25", "text": "Financial Information", "type": "control_head" }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, { "description": "", "name": "gender", "qid": "56", "subLabel": "", "text": "Gender", "type": "control_dropdown" }, null, null, null, null, null, null, null, null, { "description": "", "name": "name65", "qid": "65", "text": "Name", "type": "control_fullname" }, { "description": "", "name": "relationshipWith", "qid": "66", "subLabel": "", "text": "Relationship with candidate", "type": "control_textbox" }, null, null, null, null, null, { "description": "", "name": "dateOf72", "qid": "72", "text": "Date of Birth", "type": "control_datetime" }, null, null, null, null, null, null, null, { "name": "alamgirInstitute", "qid": "80", "text": "ALAMGIR INSTITUTE OF Enginering & Technology", "type": "control_head" }, null, null, null, null, null, null, { "name": "admissionForm", "qid": "87", "text": "Candidate Information", "type": "control_head" }, null, null, null, null, null, null, { "description": "", "name": "phoneNumber94", "qid": "94", "text": "Mobile #(Alternate)", "type": "control_phone" }, null, null, null, null, null, { "description": "", "name": "cnic", "qid": "100", "text": "CNIC #", "type": "control_phone" }, { "description": "", "name": "email", "qid": "101", "subLabel": "example@example.com", "text": "Email", "type": "control_email" }, { "description": "", "name": "email102", "qid": "102", "subLabel": "", "text": "Religion", "type": "control_email" }, null, { "description": "", "name": "religion104", "qid": "104", "subLabel": "", "text": "Domicile", "type": "control_email" }, null, null, { "description": "", "name": "mobilealternate", "qid": "107", "text": "Mobile #(Alternate)", "type": "control_phone" }, { "description": "", "name": "phone", "qid": "108", "text": "Phone # Residence", "type": "control_phone" }, null, null, null, { "description": "", "name": "email112", "qid": "112", "subLabel": "example@example.com", "text": "Email", "type": "control_email" }, null, null, { "description": "", "name": "occupationOf", "qid": "115", "subLabel": "", "text": "Occupation Of Guardian", "type": "control_textbox" }, { "description": "", "name": "phoneNo", "qid": "116", "text": "Phone no #", "type": "control_phone" }, { "description": "", "name": "mobile", "qid": "117", "text": "Mobile # (Alternate)", "type": "control_phone" }, { "description": "", "name": "cnic118", "qid": "118", "text": "CNIC #", "type": "control_phone" }, { "description": "", "name": "fileUpload", "qid": "119", "subLabel": "Upload pic", "text": "SSC Certificate or Marksheet", "type": "control_fileupload" }, { "name": "pictureOf", "qid": "120", "text": "Picture of the following documents ", "type": "control_head" }, { "description": "", "name": "passportSize", "qid": "121", "subLabel": "", "text": "Passport size Photograph", "type": "control_fileupload" }, null, { "description": "", "name": "cnicOf", "qid": "123", "subLabel": "", "text": "CNIC of Father\u002F Guardian", "type": "control_fileupload" }, null, null, null, null, null, null, null, null, null, null, null, null, null, { "name": "pageBreak", "qid": "137", "text": "Page Break", "type": "control_pagebreak" }, null, null, null, { "name": "submit", "qid": "141", "text": "Submit", "type": "control_button" }, null, { "name": "pageBreak143", "qid": "143", "text": "Page Break", "type": "control_pagebreak" }, { "description": "", "name": "applyingFor", "qid": "144", "subLabel": "", "text": "applying for scholarships?", "type": "control_dropdown" }, null, { "description": "", "name": "monthlyIncome", "qid": "146", "subLabel": "", "text": "Monthly Income", "type": "control_dropdown" }, { "description": "", "name": "noOf", "qid": "147", "subLabel": "", "text": "No of Family members", "type": "control_dropdown" }, { "description": "", "name": "typeA", "qid": "148", "text": "Type a question", "type": "control_checkbox" }, { "description": "", "name": "typeA149", "qid": "149", "subLabel": "", "text": "Type a question", "type": "control_dropdown" }]);
}, 20); 

// other csss

var style = document.createElement('style');
style.setAttribute("id","multiselect_dropdown_styles");
style.innerHTML = `
.multiselect-dropdown{
  display: inline-block;
  padding: 2px 5px 0px 5px;
  border-radius: 4px;
  border: solid 1px #ced4da;
  background-color: white;
  position: relative;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right .75rem center;
  background-size: 16px 12px;
}
.multiselect-dropdown span.optext, .multiselect-dropdown span.placeholder{
  margin-right:0.5em; 
  margin-bottom:2px;
  padding:1px 0; 
  border-radius: 4px; 
  display:inline-block;
}
.multiselect-dropdown span.optext{
  background-color:lightgray;
  padding:1px 0.75em; 
}
.multiselect-dropdown span.optext .optdel {
  float: right;
  margin: 0 -6px 1px 5px;
  font-size: 0.7em;
  margin-top: 2px;
  cursor: pointer;
  color: #666;
}
.multiselect-dropdown span.optext .optdel:hover { color: #c66;}
.multiselect-dropdown span.placeholder{
  color:#ced4da;
}
.multiselect-dropdown-list-wrapper{
  box-shadow: gray 0 3px 8px;
  z-index: 100;
  padding:2px;
  border-radius: 4px;
  border: solid 1px #ced4da;
  display: none;
  margin: -1px;
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  background: white;
}
.multiselect-dropdown-list-wrapper .multiselect-dropdown-search{
  margin-bottom:5px;
}
.multiselect-dropdown-list{
  padding:2px;
  height: 15rem;
  overflow-y:auto;
  overflow-x: hidden;
}
.multiselect-dropdown-list::-webkit-scrollbar {
  width: 6px;
}
.multiselect-dropdown-list::-webkit-scrollbar-thumb {
  background-color: #bec4ca;
  border-radius:3px;
}

.multiselect-dropdown-list div{
  padding: 5px;
}
.multiselect-dropdown-list input{
  height: 1.15em;
  width: 1.15em;
  margin-right: 0.35em;  
}
.multiselect-dropdown-list div.checked{
}
.multiselect-dropdown-list div:hover{
  background-color: #ced4da;
}
.multiselect-dropdown span.maxselected {width:100%;}
.multiselect-dropdown-all-selector {border-bottom:solid 1px #999;}
`;
document.head.appendChild(style);

function MultiselectDropdown(options){
  var config={
    search:true,
    height:'15rem',
    placeholder:'select',
    txtSelected:'selected',
    txtAll:'All',
    txtRemove: 'Remove',
    txtSearch:'search',
    ...options
  };
  function newEl(tag,attrs){
    var e=document.createElement(tag);
    if(attrs!==undefined) Object.keys(attrs).forEach(k=>{
      if(k==='class') { Array.isArray(attrs[k]) ? attrs[k].forEach(o=>o!==''?e.classList.add(o):0) : (attrs[k]!==''?e.classList.add(attrs[k]):0)}
      else if(k==='style'){  
        Object.keys(attrs[k]).forEach(ks=>{
          e.style[ks]=attrs[k][ks];
        });
       }
      else if(k==='text'){attrs[k]===''?e.innerHTML='&nbsp;':e.innerText=attrs[k]}
      else e[k]=attrs[k];
    });
    return e;
  }

  
  document.querySelectorAll("select[multiple]").forEach((el,k)=>{
    
    var div=newEl('div',{class:'multiselect-dropdown',style:{width:config.style?.width??el.clientWidth+'px',padding:config.style?.padding??''}});
    el.style.display='none';
    el.parentNode.insertBefore(div,el.nextSibling);
    var listWrap=newEl('div',{class:'multiselect-dropdown-list-wrapper'});
    var list=newEl('div',{class:'multiselect-dropdown-list',style:{height:config.height}});
    var search=newEl('input',{class:['multiselect-dropdown-search'].concat([config.searchInput?.class??'form-control']),style:{width:'100%',display:el.attributes['multiselect-search']?.value==='true'?'block':'none'},placeholder:config.txtSearch});
    listWrap.appendChild(search);
    div.appendChild(listWrap);
    listWrap.appendChild(list);

    el.loadOptions=()=>{
      list.innerHTML='';
      
      if(el.attributes['multiselect-select-all']?.value=='true'){
        var op=newEl('div',{class:'multiselect-dropdown-all-selector'})
        var ic=newEl('input',{type:'checkbox'});
        op.appendChild(ic);
        op.appendChild(newEl('label',{text:config.txtAll}));
  
        op.addEventListener('click',()=>{
          op.classList.toggle('checked');
          op.querySelector("input").checked=!op.querySelector("input").checked;
          
          var ch=op.querySelector("input").checked;
          list.querySelectorAll(":scope > div:not(.multiselect-dropdown-all-selector)")
            .forEach(i=>{if(i.style.display!=='none'){i.querySelector("input").checked=ch; i.optEl.selected=ch}});
  
          el.dispatchEvent(new Event('change'));
        });
        ic.addEventListener('click',(ev)=>{
          ic.checked=!ic.checked;
        });
  
        list.appendChild(op);
      }

      Array.from(el.options).map(o=>{
        var op=newEl('div',{class:o.selected?'checked':'',optEl:o})
        var ic=newEl('input',{type:'checkbox',checked:o.selected});
        op.appendChild(ic);
        op.appendChild(newEl('label',{text:o.text}));

        op.addEventListener('click',()=>{
          op.classList.toggle('checked');
          op.querySelector("input").checked=!op.querySelector("input").checked;
          op.optEl.selected=!!!op.optEl.selected;
          el.dispatchEvent(new Event('change'));
        });
        ic.addEventListener('click',(ev)=>{
          ic.checked=!ic.checked;
        });
        o.listitemEl=op;
        list.appendChild(op);
      });
      div.listEl=listWrap;

      div.refresh=()=>{
        div.querySelectorAll('span.optext, span.placeholder').forEach(t=>div.removeChild(t));
        var sels=Array.from(el.selectedOptions);
        if(sels.length>(el.attributes['multiselect-max-items']?.value??5)){
          div.appendChild(newEl('span',{class:['optext','maxselected'],text:sels.length+' '+config.txtSelected}));          
        }
        else{
          sels.map(x=>{
            var c=newEl('span',{class:'optext',text:x.text, srcOption: x});
            if((el.attributes['multiselect-hide-x']?.value !== 'true'))
              c.appendChild(newEl('span',{class:'optdel',text:'🗙',title:config.txtRemove, onclick:(ev)=>{c.srcOption.listitemEl.dispatchEvent(new Event('click'));div.refresh();ev.stopPropagation();}}));

            div.appendChild(c);
          });
        }
        if(0==el.selectedOptions.length) div.appendChild(newEl('span',{class:'placeholder',text:el.attributes['placeholder']?.value??config.placeholder}));
      };
      div.refresh();
    }
    el.loadOptions();
    
    search.addEventListener('input',()=>{
      list.querySelectorAll(":scope div:not(.multiselect-dropdown-all-selector)").forEach(d=>{
        var txt=d.querySelector("label").innerText.toUpperCase();
        d.style.display=txt.includes(search.value.toUpperCase())?'block':'none';
      });
    });

    div.addEventListener('click',()=>{
      div.listEl.style.display='block';
      search.focus();
      search.select();
    });
    
    document.addEventListener('click', function(event) {
      if (!div.contains(event.target)) {
        listWrap.style.display='none';
        div.refresh();
      }
    });    
  });
}

window.addEventListener('load',()=>{
  MultiselectDropdown(window.MultiselectDropdownOptions);
});