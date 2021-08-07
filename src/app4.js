import $ from 'jquery'
import './app4.css'

const $circle = $('.circle')
$circle.on('mouseenter',()=>{
    $circle.addClass('color')
})
.on('mouseleave',()=>{
    $circle.removeClass('color')
})