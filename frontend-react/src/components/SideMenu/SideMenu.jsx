import Container from '@mui/material/Container';


export function SideMenu() {
  return (
    <Container>
      <aside>
        <p className="menu-label">Basket</p>
        <ul className="menu-list">
          <li>
            <a className="" href="restaurants/1">
              Sea food restaurant
            </a>
          </li>
          <li>
            <a className="" href="restaurants/2">
              Sooo Fast
            </a>
          </li>
        </ul>
        <p className="menu-label">Orders</p>
        <ul className="menu-list">
          <li className="notification is-warning">
            {" "}
            Loading failed: Not allowed
          </li>
        </ul>
      </aside>
    </Container>
  );
}
