import '/app2.css'
import $ from 'jquery'

const $nav = $('#nav')
const $container = $('#container')

$nav.on('click','div',(e)=>{
    const $div = $(e.currentTarget)
    const index =  $div.index()
    $container.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
    $nav.children()
        .eq(index).addClass('backGround')
        .siblings().removeClass('backGround')
})