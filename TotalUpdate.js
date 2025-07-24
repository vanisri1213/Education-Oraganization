function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading || newValue === '') {

      return;

   }


   //Type appropriate comment here, and begin script below

if (newValue){

var a = parseInt(g_form.getValue('u_telugu'));

var b = parseInt(g_form.getValue('u_hindi'));

var c = parseInt(g_form.getValue('u_english')); 

var d = parseInt(g_form.getValue('u_maths'));

var e = parseInt(g_form.getValue('u_science')); 

var f = parseInt(g_form.getValue('u_social'));

var Total = parseInt(a+b+c+d+e+f);

g_form.setValue('u_total', Total);

}

}