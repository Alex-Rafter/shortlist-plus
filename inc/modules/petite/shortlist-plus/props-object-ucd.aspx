<%
Dim PropObj, PropUrl, PropManu, PropModel, PropReg, PropYear, PropPrice, PropImage As String
Dim regex As Regex = New Regex("^.*?(/used.*)")
Dim matchUrl As Match = regex.Match(COGUsedURL.Text)
Dim urlEdited As String = matchUrl.Groups(1).Value

PropObj = "{ "
PropUrl ="url : '" & urlEdited.replace("'", "\'") & "' ,"
PropManu = "manufacturer : '" & Manufacturer.Text.replace("'", "`") & "' ,"
PropModel = "model : '" & Model.Text.replace("'", "`") & "' ,"
PropReg = "reg : '" & RegPlate.Text.replace("'", "`") & "' ,"
PropYear = "year : '" & RegYear.Text.replace("'", "`") & "' ,"
PropPrice = "price : '" & Price.Text.replace("'", "`") & "' ,"
PropImage = "image : '" & Images.ImageURL & "' ,"
PropObj = PropObj & PropUrl & PropManu & PropModel & PropReg & PropYear & PropImage & PropPrice & "}"
%>