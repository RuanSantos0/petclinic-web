angular.module("PetClinic", []);

angular.module("PetClinic").controller("addCtrl", function ($scope) {
  $scope.app = "Adicionar";

  $scope.donos = [
    {id: 1, nome: "Pedro", sobrenome: "Santos", endereco:"Rua dos prazeres", cidade:"Aracati", telefone: "99998888"},
    {id: 2, nome: "Ana", sobrenome: "Gondim", endereco:"Beira Mar", cidade:"Fortaleza",  telefone: "99998877"},
    {id: 3, nome: "Maria", sobrenome: "Nunes", endereco:"C", cidade:"Aracati",  telefone: "99998866"}
  ];
  $scope.pets = [
    {id: 1, nome: "Max", dataNascimento: "16/03/1999", dono: "Ana", raca: "Bulldog" },
    {id: 2, nome: "Bolota", dataNascimento: "12/03/1998", dono: "Pedro", raca: "Dálmata"},
    {id: 3, nome: "Flocs", dataNascimento: "06/02/1999", dono: "Maria", raca: "Shih-tzu"}

  ];

  $scope.racas = [
            { id: 1, Nome: 'Dálmata'},
            { id: 2, Nome: 'Shih-tzu'},
            { id: 3, Nome: 'Pastor-Belga'},
            { id: 4, Nome: 'Buldogue'},
            { id: 5, Nome: 'Pit Bull'},
            { id: 6,  Nome: 'Pinscher'}
  ];

    $scope.adicionarDono = function (dono) {
    $scope.donos.push(angular.copy(dono));
    delete $scope.dono;
    alert("Cadastrado");
  };

  $scope.adicionarPet = function (pet) {
    $scope.pets.push(angular.copy(pet));
    delete $scope.pet;
  };
  $scope.apagarContatos = function (contatos) {
    $scope.contatos = contatos.filter(function (contato) {
      if (!contato.selecionado) return contato;
    });
  };
  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };
});
