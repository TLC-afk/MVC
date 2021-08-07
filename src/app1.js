import '/app1.css'
import $ from 'jquery'

const $number = $('.number')
const $button1 = $('.btnAdd')
const $button2 = $('.btnReduce')
const $button3 = $('.btnMul')
const $button4 = $('.btnChu')
let n = localStorage.getItem('n') ||100
$number.text(n)

$button1.on('click',()=>{
    n = parseInt($number.text())
    n += 1
    localStorage.setItem('n',n)
    $number.text(n)
})
$button2.on('click',()=>{
    n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n',n)
    $number.text(n)
})
$button3.on('click',()=>{
    n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n',n)
    $number.text(n)
})
$button4.on('click',()=>{
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n',n)
    $number.text(n)
})

