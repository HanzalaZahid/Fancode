$.fn.toggleText = function(t1, t2){
    if (this.text() == t1) this.text(t2);
    else                   this.text(t1);
    return this;
};
$('.live_table .header .right button').click(
    ()=>
    {
        $('.live_table .header .toggle_element').toggleClass('hidden');
        $('.live_table>.header').toggleClass('column_flex');
        $('.live_table .header .right button').toggleText('SEE LESS', 'SEE MORE');
    }
)