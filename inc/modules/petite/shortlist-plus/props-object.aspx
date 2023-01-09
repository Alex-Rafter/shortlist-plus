<%
Dim PropObj, PropUrl, PropManu, PropModel, PropReg, PropYear, PropPrice, PropImage As String
PropObj = "{ "
PropUrl ="url : '" & COGUsedURL.Text.replace("'", "\'") & "' ,"
PropManu = "manufacturer : '" & Manufacturer.Text.replace("'", "`") & "' ,"
PropModel = "model : '" & Model.Text.replace("'", "`") & "' ,"
PropReg = "reg : '" & RegPlate.Text.replace("'", "`") & "' ,"
PropYear = "year : '" & RegYear.Text.replace("'", "`") & "' ,"
PropPrice = "price : '" & Price.Text.replace("'", "`") & "' ,"
PropImage = "image : '" & Images.ImageURL & "' ,"
PropObj = PropObj & PropUrl & PropManu & PropModel & PropReg & PropYear & PropImage & PropPrice & "}"
%>
