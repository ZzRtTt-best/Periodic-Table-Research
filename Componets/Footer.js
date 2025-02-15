
function Footer({toggleHomeCredit}){
    
    return (
        <footer>
            <div className="credits">
                <a href="#" onClick ={toggleHomeCredit}>Credits</a>
            </div>
        </footer>
    )
}

export default Footer;