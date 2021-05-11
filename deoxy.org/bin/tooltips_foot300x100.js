//Tooltips 1.0
//Created by Manuel Huerta <al601402@academ01.mty.itesm.mx>
//
var tooltip_window = null;
function tooltip(mensaje, status) {
	if(document.forma.ett.checked) 
	{
    if(status != 0)
    {
      if(tooltip != null) tooltip.focus();
      else
      {
        var tooltip = open('', 'Tooltip', 'width=300,height=100');
        tooltip_window = tooltip;
        tooltip.document.open();
        tooltip.document.writeln('<html><head><title>Footnote</title></head><body text=#000000 bgcolor=#FF8000>');
        tooltip.document.writeln('<blockquote><FONT size=-1>' + mensaje + '</B></FONT></CENTER>');
        tooltip.document.writeln('</body></html>');
        tooltip.document.close();
      }
    }
    else
    {
      if(tooltip_window != null) tooltip_window.close();
    }
  }
}
