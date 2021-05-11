function chatterWindow(loc) {
  if (!loc) loc = 'http://deoxy.org/chatr';
  chatwind=window.open(loc,"chatwind","resizable,status,width=750,height=550");
  chatwind.focus();
}
