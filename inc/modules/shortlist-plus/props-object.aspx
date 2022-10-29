<%
Dim PropObj, PropUrl, PropManu, PropModel, PropReg, PropYear, PropPrice, PropImage As String
PropObj = "{ "
PropUrl ="url : '" & COGUsedURL.Text & "' ,"
PropManu = "manufacturer : '" & Manufacturer.Text & "' ,"
PropModel = "model : '" & Model.Text & "' ,"
PropReg = "reg : '" & RegPlate.Text & "' ,"
PropYear = "year : '" & RegYear.Text & "' ,"
PropPrice = "price : '" & Price.Text & "' ,"
PropImage = "image : '" & Images.ImageURL & "' ,"
PropObj = PropObj & PropUrl & PropManu & PropModel & PropReg & PropYear & PropImage & PropPrice & "}"
%>
