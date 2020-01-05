import React from 'react';
import './App.css';
import Home from './components/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">    
      <nav>
        <Navbar id="navbar-2" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="#home">ToneSense</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <a className="nav-link" href="#contact">Contact</a>
              <a className="nav-link" href="#features">Features</a>
              <a className="nav-link" href="#pricing">Pricing</a>
              
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Demo</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div data-spy="scroll" data-target="#navbar-2" data-offset="0">
          <h3 id="contact">Contact Section</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis. Integer enim neque volutpat ac tincidunt. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Ullamcorper velit sed ullamcorper morbi. Consequat id porta nibh venenatis cras. Tristique sollicitudin nibh sit amet. Non arcu risus quis varius quam quisque id diam vel. Est ultricies integer quis auctor elit sed vulputate mi. Elit pellentesque habitant morbi tristique senectus.

Amet nisl purus in mollis nunc sed id semper risus. Fames ac turpis egestas sed. Tristique senectus et netus et malesuada fames ac turpis. Vulputate dignissim suspendisse in est ante. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Nullam non nisi est sit amet facilisis magna etiam. Mattis vulputate enim nulla aliquet porttitor lacus. Nunc mi ipsum faucibus vitae.

Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sagittis orci a scelerisque purus. Auctor elit sed vulputate mi sit amet. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Donec et odio pellentesque diam volutpat commodo sed egestas. Lectus proin nibh nisl condimentum id venenatis. Turpis in eu mi bibendum neque. Sem integer vitae justo eget. Orci eu lobortis elementum nibh tellus molestie nunc non. Nisi lacus sed viverra tellus in. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Nunc vel risus commodo viverra maecenas accumsan lacus.

Varius sit amet mattis vulputate enim nulla aliquet porttitor. In est ante in nibh mauris. Massa ultricies mi quis hendrerit dolor. A erat nam at lectus urna duis. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Consectetur libero id faucibus nisl tincidunt eget nullam. Praesent tristique magna sit amet purus gravida quis. Vitae et leo duis ut diam. Aliquet eget sit amet tellus cras. Egestas diam in arcu cursus euismod.

Amet consectetur adipiscing elit pellentesque habitant. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Viverra justo nec ultrices dui sapien eget mi proin. Tristique et egestas quis ipsum suspendisse ultrices gravida. Convallis aenean et tortor at risus viverra adipiscing at in. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Orci porta non pulvinar neque laoreet suspendisse interdum. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Lorem ipsum dolor sit amet consectetur. Praesent semper feugiat nibh sed. Ac turpis egestas maecenas pharetra convallis. Sit amet tellus cras adipiscing enim eu turpis egestas. Natoque penatibus et magnis dis. In fermentum posuere urna nec tincidunt praesent. Mattis pellentesque id nibh tortor id aliquet.
            </p>
          <h3 id="features">Features Section</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut. Odio tempor orci dapibus ultrices. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Proin sagittis nisl rhoncus mattis. Ultricies lacus sed turpis tincidunt id. Iaculis eu non diam phasellus vestibulum lorem. Elit duis tristique sollicitudin nibh sit amet commodo. Congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.

Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. A lacus vestibulum sed arcu non odio euismod lacinia. Interdum consectetur libero id faucibus nisl tincidunt. Ac auctor augue mauris augue neque gravida in. Nibh tellus molestie nunc non blandit. Ornare massa eget egestas purus viverra accumsan in. Eget egestas purus viverra accumsan in nisl. Sit amet est placerat in egestas erat imperdiet. Turpis egestas sed tempus urna et pharetra pharetra. Blandit aliquam etiam erat velit scelerisque. Vitae nunc sed velit dignissim. Ut diam quam nulla porttitor massa id. Erat nam at lectus urna duis.

Ut diam quam nulla porttitor massa id. Ut enim blandit volutpat maecenas. Elit at imperdiet dui accumsan. Pharetra sit amet aliquam id diam maecenas ultricies mi. Mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Risus at ultrices mi tempus. Ut etiam sit amet nisl. Nunc lobortis mattis aliquam faucibus purus in massa. Nulla aliquet enim tortor at auctor urna nunc id. Blandit massa enim nec dui nunc. Proin fermentum leo vel orci porta non pulvinar neque. Consectetur adipiscing elit ut aliquam purus. Mauris augue neque gravida in. Pellentesque eu tincidunt tortor aliquam. Arcu ac tortor dignissim convallis aenean et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Justo eget magna fermentum iaculis eu non diam. Facilisis leo vel fringilla est.

Risus nec feugiat in fermentum posuere urna nec tincidunt. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Auctor neque vitae tempus quam. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Ut consequat semper viverra nam libero justo. Tincidunt arcu non sodales neque sodales. Tortor aliquam nulla facilisi cras fermentum odio eu. Eget mi proin sed libero enim sed faucibus turpis. Facilisis volutpat est velit egestas dui id ornare arcu odio. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi.

Sed ullamcorper morbi tincidunt ornare massa. Nibh nisl condimentum id venenatis a condimentum. Ornare quam viverra orci sagittis eu volutpat. Posuere morbi leo urna molestie at. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Sed risus ultricies tristique nulla. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Ut etiam sit amet nisl purus in mollis. Odio ut enim blandit volutpat maecenas. Eu scelerisque felis imperdiet proin fermentum leo.</p>
          <h3 id="pricing">Pricing Section</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur purus ut. Odio tempor orci dapibus ultrices. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Proin sagittis nisl rhoncus mattis. Ultricies lacus sed turpis tincidunt id. Iaculis eu non diam phasellus vestibulum lorem. Elit duis tristique sollicitudin nibh sit amet commodo. Congue quisque egestas diam in arcu cursus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.

Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. A lacus vestibulum sed arcu non odio euismod lacinia. Interdum consectetur libero id faucibus nisl tincidunt. Ac auctor augue mauris augue neque gravida in. Nibh tellus molestie nunc non blandit. Ornare massa eget egestas purus viverra accumsan in. Eget egestas purus viverra accumsan in nisl. Sit amet est placerat in egestas erat imperdiet. Turpis egestas sed tempus urna et pharetra pharetra. Blandit aliquam etiam erat velit scelerisque. Vitae nunc sed velit dignissim. Ut diam quam nulla porttitor massa id. Erat nam at lectus urna duis.

Ut diam quam nulla porttitor massa id. Ut enim blandit volutpat maecenas. Elit at imperdiet dui accumsan. Pharetra sit amet aliquam id diam maecenas ultricies mi. Mollis aliquam ut porttitor leo a diam sollicitudin. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Risus at ultrices mi tempus. Ut etiam sit amet nisl. Nunc lobortis mattis aliquam faucibus purus in massa. Nulla aliquet enim tortor at auctor urna nunc id. Blandit massa enim nec dui nunc. Proin fermentum leo vel orci porta non pulvinar neque. Consectetur adipiscing elit ut aliquam purus. Mauris augue neque gravida in. Pellentesque eu tincidunt tortor aliquam. Arcu ac tortor dignissim convallis aenean et. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Justo eget magna fermentum iaculis eu non diam. Facilisis leo vel fringilla est.

Risus nec feugiat in fermentum posuere urna nec tincidunt. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Auctor neque vitae tempus quam. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Ut consequat semper viverra nam libero justo. Tincidunt arcu non sodales neque sodales. Tortor aliquam nulla facilisi cras fermentum odio eu. Eget mi proin sed libero enim sed faucibus turpis. Facilisis volutpat est velit egestas dui id ornare arcu odio. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi.

Sed ullamcorper morbi tincidunt ornare massa. Nibh nisl condimentum id venenatis a condimentum. Ornare quam viverra orci sagittis eu volutpat. Posuere morbi leo urna molestie at. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Sed risus ultricies tristique nulla. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Ut etiam sit amet nisl purus in mollis. Odio ut enim blandit volutpat maecenas. Eu scelerisque felis imperdiet proin fermentum leo.</p>
        </div>
      </nav>
      <Home />
    </div>
  );
}

export default App;
