$.fn.toggleText = function(t1, t2){
    if (this.text() == t1) this.text(t2);
    else                   this.text(t1);
    return this;
};
$('button.event_list').click(
    ()=>
    {
        $('.content_area .sidebar').toggleClass('mobile_sidebar');
        $('button.event_list').toggleText('X', 'Event List');
    }
)