WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_1914765408_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Portland" @@ hightlight id_;_1914769056_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1914386376_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 2,0 @@ hightlight id_;_1914796800_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1914803376_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "john" @@ hightlight id_;_2068448752_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_2070830584_;_script infofile_;_ZIP::ssf9.xml_;_
wait 2
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order # completed").Check CheckPoint("Order # completed")
WpfWindow("HPE MyFlight Sample Applicatio").Close
