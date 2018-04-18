SystemUtil.CloseProcessByName "FlightsGUI.exe"
SystemUtil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_2021512328_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "58c04773f993049456fe"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
