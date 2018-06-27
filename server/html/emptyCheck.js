function validateForm() {
        var mname = document.forms["form1"]["mname"].value;
        var bfname = document.forms["form1"]["bfname"].value;
        var gfname = document.forms["form1"]["gfname"].value;
        var lname = document.forms["form1"]["lname"].value;
        var fname = document.forms["form1"]["ffname"].value;
      /*  var mname = form["mname"].value;
        var bfname = form["bfname"].value;
        var gfname = form["gfname"].value;
        var lname = form["lname"].value;
        var fname = form["ffname"].value;*/
        if (mname == "")
        {
            alert("உங்கள் பெயர் பதிவுசெய்");
            return false;
        }
        if (bfname == "")
            {
                alert("உயிர்தோழன் பெயர் பதிவுசெய்");
                return false;
            }
        if (gfname == "")
            {
                alert("உயிர்தோழி பெயர் பதிவுசெய்");
                return false;
            }
        if (lname == "" && fname=="")
        {

            alert("காதலன் (அல்ல) காதலி பெயர் அல்லது வாழ்க்கைதுனைப ெயர் பதிவுசெய்");
            return false;
        }
    }
    var form = document.getElementById("form1");
           form.onsubmit = validateForm;