import React, { Component } from "react";

import "../App.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { Grid, Card, CardContent } from "@material-ui/core";

import { Button } from "react-bootstrap";
import Footer from "./Footer";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [],
      name: [],
      type: [],
      pokemon: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:5000/pokemon/?_limit=100") // I have set the limit to 100 in order to load 100 pokemons, you can extend it to any number.
      .then((res) => res.json())
      .then((data) => this.setState({ pokemon: data }));
  }

  // For testing
  //const [filter, setFilter] = useState("");

  //const handleSearchChange = (e) => {
  //  serFilter(e.target.value)
  // }

  render() {
    const pokemonItem = this.state.pokemon.map((pokemon) => (
      <Grid item xs={4}>
        <Card>
          <CardContent>
            {pokemon.id}.Name : {pokemon.name.english}
          </CardContent>
          <CardContent>
            Type : {pokemon.type[0]},{pokemon.type[1]}
          </CardContent>
          <CardContent>Attack level : {pokemon.base.Attack}</CardContent>
          <CardContent>Type : {pokemon.base.Defense}</CardContent>
          {this.editPokemon}
          <Button className="col-md-6 offset-md-3" variant="dark" href="/new">
            Add New Details
            <AddCircleIcon />
          </Button>
        </Card>
      </Grid>
    ));

    return (
      <div>
        <div>
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand href="new" variant="dark">
                <div className=" row-md-6 offset-md-3 nav-bar">
                  {" "}
                  <strong>
                    <h1>PokedexApp</h1>
                  </strong>
                </div>
              </Navbar.Brand>
            </Container>
          </Navbar>
          <br />
          <Button
            variant="dark"
            href="/search"
            className="col-md-3 offset-md-4"
          >
            Search your favourite Pokemon here...
            <SearchIcon />
          </Button>
        </div>
        <hr />
        <Button variant="dark" href="/new" className="col-md-3 offset-md-4">
          <CreateIcon /> Create a new Pokemon here
        </Button>

        <br />
        <br />
        <br />
        <br />

        <Grid container spacing={2}>
          {pokemonItem}
        </Grid>
        <Footer />
      </div>
    );
  }
}
