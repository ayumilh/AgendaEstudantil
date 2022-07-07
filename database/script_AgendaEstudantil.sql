* pode usar a sigla como chave estrangeira em mais de uma tabela?
------------------------------------------------
create database AgendaEstudantil;

use AgendaEstudantil;

create table materia(
sigla VARCHAR(4) NOT NULL PRIMARY KEY,
disciplina VARCHAR(32) NOT NULL 
);

create table atividade(
sigla VARCHAR(4) NOT NULL,
atv_data DATE NOT NULL PRIMARY KEY,
atv_desc VARCHAR(150) NOT NULL,
foto VARCHAR(200),
link VARCHAR(200),
observacao VARCHAR(250),
entregar DATE,
FOREIGN KEY (sigla) REFERENCES materia (sigla) 
); 

create table prova( 
sigla VARCHAR(4) NOT NULL,
prova_data DATE NOT NULL PRIMARY KEY,
conteudo VARCHAR(150) NOT NULL,
revisar VARCHAR(200),
nota VARCHAR(2),
FOREIGN KEY (sigla) REFERENCES materia (sigla) 
);


INSERT INTO materia VALUES("E.F", "Educacao Física");
INSERT INTO materia VALUES("FIS", "Fisica");
INSERT INTO materia VALUES("ING", "Ingles");
INSERT INTO materia VALUES("POR", "Portugues");
INSERT INTO materia VALUES("MAT", "Matematica");
INSERT INTO materia VALUES("FIL", "Filosofia");
INSERT INTO materia VALUES("BIO", "Biologia");
INSERT INTO materia VALUES("HIS", "Historia");
INSERT INTO materia VALUES("QUI", "Quimica");
INSERT INTO materia VALUES("SOC", "Sociologia");

INSERT INTO materia VALUES("ECO", "Etica");
INSERT INTO materia VALUES("PWII", "Programacao Web II");
INSERT INTO materia VALUES("BD", "Banco de Dados");
INSERT INTO materia VALUES("DS", "Desenvolvimento de Sistemas");
INSERT INTO materia VALUES("SE", "Sistemas Embarcados");
INSERT INTO materia VALUES("PAM", "Programacao Mobile");

INSERT INTO atividade VALUES("BD", "20220623", "fazer o banco de dados da agenda estudantil", default, default, "terminar o word", "20220630");
INSERT INTO atividade VALUES("SE", "20220620", "fazer o forms", default, "www.youtube.com", "ve os videos no youtube", default);
INSERT INTO atividade VALUES("ING", "20220624", "copiar a licao da lousa", default, default, "imagem no what", default);
INSERT INTO atividade VALUES("E.F", "20220613", "apresentacao de slides", default, default, default, "20220621");
INSERT INTO atividade VALUES("PWII", "20220624", "Terminar de fazer o cadastro de php", default, default, "ligar o php com o bd", default);

INSERT INTO prova VALUES("QUI", "20220627", "termometria", "pagina 145 a 160 do livro", default);
INSERT INTO prova VALUES("MAT", "20220620", "logaritmo", "pagina 45 a 50 do livro", default);
INSERT INTO prova VALUES("BIO", "20220627", "plantas", "pagina 121 a 130 do livro", default);
INSERT INTO prova VALUES("FIL", "20220628", "Republica", "caderno", default);
INSERT INTO prova VALUES("SOC", "20220621", "Anarquismo/neoliberalismo", "caderno/youtube", default);



-- delete e update
delete from prova where sigla="MAT";
update prova set conteudo='lei de hess' where sigla="QUI";