<%

Dim PropObj, PropUrl, PropManu, PropModel, PropReg, PropYear, PropPrice, PropImage As String
Dim PropColour, PropMilege, PropFuelType, PropTransmission, PropStockID As String
Dim regex As Regex = New Regex("^.*?(/used.*)")
Dim matchUrl As Match = regex.Match(COGUsedURL.Text)
Dim urlEdited As String = matchUrl.Groups(1).Value

PropUrl = String.Format("url : '{0}'", urlEdited.replace("'", "\'"))
PropManu = String.Format("manufacturer : '{0}'", Manufacturer.Text.replace("'", "`"))
PropModel = String.Format("model : '{0}'", Model.Text.replace("'", "`"))
PropReg = String.Format("reg : '{0}'",RegPlate.Text.replace("'", "`"))
PropYear = String.Format("year : '{0}'", RegYear.Text.replace("'", "`"))
PropPrice = String.Format("price : '{0}'", Price.Text.replace("'", "`"))

PropImage  = String.Format("image : '{0}'", Images.ImageURL)
PropColour = String.Format("colour : '{0}'", Colour.Text.replace("'", "`"))
PropMilege = String.Format("mileage : '{0}'", mileage.Text.replace("'", "`"))
PropFuelType = String.Format("fuelType : '{0}'", fuelType.Text.replace("'", "`"))
PropTransmission = String.Format("transmission : '{0}'", Transmission.Text.replace("'", "`"))

PropObj = String.Format("{0},{1},{2},{3},{4},{5},{6},{7},{8},{9},{10},{11},{11}", PropUrl, PropManu, PropModel, PropReg, PropYear, PropImage, PropPrice, PropImage, PropColour, PropMilege, PropFuelType, PropTransmission)
PropObj = "{" & PropObj & "}"

%>
