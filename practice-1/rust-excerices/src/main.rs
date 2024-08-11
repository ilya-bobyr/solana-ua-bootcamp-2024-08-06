mod generate_keypairs;

fn main() {
    generate_keypairs::generate_keypair(true);
    generate_keypairs::generate_keypair_by_search("ua");
}
